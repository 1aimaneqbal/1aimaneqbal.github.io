import React, {useRef} from 'react'
import Logo from '../../images/Logo.png'
import {NavLink} from 'react-router-dom'
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
                        <a href="#landing" className={`${theme ? 'navLinksDark':''}`}>
                            <UilEstate />
                            Home
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#" className={`${theme ? 'navLinksDark':''}`}>
                            <UilUser />
                            About
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#education" className={`${theme ? 'navLinksDark':''}`}>
                            <UilBookOpen />
                            Education
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#skills" className={`${theme ? 'navLinksDark':''}`}>
                            <UilDesktop />
                            Skills
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#project" className={`${theme ? 'navLinksDark':''}`}>
                            <UilSuitcaseAlt />
                            Projects
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#" className={`${theme ? 'navLinksDark':''}`}>
                            <UilCommentImage />
                            Hobbies
                        </a>
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
