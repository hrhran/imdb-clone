import React, { useEffect } from 'react'
// import Navbar from './Navbar'
import {Outlet, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth)
    console.log(auth)
    useEffect(() => {
        if(!auth)
            navigate('/login', { replace: false })
    })
    return (
        <>
            {/* <Navbar /> */}
            <div>
                <Outlet />
            </div>
        </>
    )
    
}

export default Layout