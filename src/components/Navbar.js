// import {useEffect, useRef} from 'react'
import {ReactComponent as NavbarLogo} from '../media/logo.svg'
import {ReactComponent as ProLogo} from '../media/imdb-pro.svg'
import {ReactComponent as HamburgerIcon} from '../media/hamburger.svg'

const Navbar = () => {

  return (
    <>
    {console.log("RENDERED NAVBAR")}
        <div className='navbar'>
            <div className='nav-container'>
                <div className='nav-left'>
                    <HamburgerIcon />
                    <div className='nav-logo'>
                        <NavbarLogo />
                    </div>
                </div>
                <div className='nav-right'>
                        <ul className='nav-right-items'>
                            <li>Sign in</li>
                            <li><ProLogo /></li>
                        </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar