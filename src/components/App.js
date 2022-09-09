import React, { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './Login/Login'
import Home from './Home'
import Layout from './Layout'

import axios from 'axios'
window.axios = axios

const initialState = {
    auth: false,
}

const ACTION = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

const loginReducer = (state, action) => {
    switch (action.type) {
        case ACTION.LOGIN:
            return { auth: !state.auth };
        case ACTION.LOGOUT:
            return { auth: !state.auth };
        default:
            return state
    }
}

const App = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState)

    return (
        <Routes>
            <Route path="/login" element={<Login dispatch={dispatch} state={state} />} />  
            <Route path='/' element={<Layout state={state} />}>
              <Route index element={<Home auth={state}/>} />
            </Route>
        </Routes>
    )
}

export default App