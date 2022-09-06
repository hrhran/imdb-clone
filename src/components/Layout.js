import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {Outlet, useNavigate} from 'react-router-dom'

const Layout = ({state, dispatch}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if(!state.auth)
            navigate('/login', { replace: false })
    })
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    )
    
}

export default Layout