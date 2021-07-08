import React, {useRef} from 'react'
import Logo from '../../images/Logo.png'
import {NavLink} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import { UilMoon, UilSun, UilApps, UilTimes, UilEstate, UilBookOpen, UilUser, UilDesktop, UilCommentImage, UilSuitcaseAlt } from '@iconscout/react-unicons'
const Nav = ({theme, setTheme}) => {
    const showMenuRef = useRef(null)
    const showHideMenu = () =>{
        if(window.innerWidth<=767){
            showMenuRef.current.classList.toggle("showNavItems")
        }
    }
    const themeToggle = () =>{
        setTheme(!theme)
    }
    return (
        <nav className={`${theme ? 'navDark' : ''}`}>
            <div className="navLogo">
                <NavLink to="/"><img src={Logo}/></NavLink>
            </div>
            <div className={`navItems ${theme ? 'navItemsDark':''}`} ref={showMenuRef}>
                <ul>
                    <li onClick={showHideMenu}>
                        <Link to="#landing" className={`${theme ? 'navLinksDark':''}`}>
                            <UilEstate />
                            Home
                        </Link>
                    </li>
                    <li onClick={showHideMenu}>
                        <Link to="#about" className={`${theme ? 'navLinksDark':''}`}>
                            <UilUser />
                            About
                        </Link>
                    </li>
                    <li onClick={showHideMenu}>
                        <Link to="#education" className={`${theme ? 'navLinksDark':''}`}>
                            <UilBookOpen />
                            Education
                        </Link>
                    </li>
                    <li onClick={showHideMenu}>
                        <Link to="#skills" className={`${theme ? 'navLinksDark':''}`}>
                            <UilDesktop />
                            Skills
                        </Link>
                    </li>
                    <li onClick={showHideMenu}>
                        <Link to="#project" className={`${theme ? 'navLinksDark':''}`}>
                            <UilSuitcaseAlt />
                            Projects
                        </Link>
                    </li>
                    <li onClick={showHideMenu}>
                        <Link to="#hobbies" className={`${theme ? 'navLinksDark':''}`}>
                            <UilCommentImage />
                            Hobbies
                        </Link>
                    </li>
                </ul>
                <div className="navClose" onClick={showHideMenu}>
                    <UilTimes />
                </div>
            </div>
            <div className="navToggle">
                <div className='themeToggle' onClick={themeToggle}>
                    {theme ? <UilSun /> : <UilMoon /> }
                </div>
                <div className="menuToggle" onClick={showHideMenu}>
                    <UilApps />
                </div>
            </div>
        </nav>
    )
}

export default Nav
