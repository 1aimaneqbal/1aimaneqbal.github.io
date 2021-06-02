import React, {useRef} from 'react'
import Logo from '../images/Logo.png'
import {NavLink} from 'react-router-dom'
import { UilMoon, UilApps, UilTimes, UilEstate, UilBookOpen, UilUser, UilDesktop, UilCommentImage, UilSuitcaseAlt } from '@iconscout/react-unicons'
const Nav = () => {
    const showMenuRef = useRef(null)
    const showHideMenu = () =>{
        showMenuRef.current.classList.toggle("showNavItems")
    }
    return (
        <nav>
            <div className="navLogo">
                <NavLink to="/"><img src={Logo}/></NavLink>
            </div>
            <div className="navItems" ref={showMenuRef}>
                <ul>
                    <li onClick={showHideMenu}>
                        <a href="#" className="navLink">
                            <UilEstate />
                            Home
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#" className="navLink">
                            <UilUser />
                            About
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#skills" className="navLink">
                            <UilDesktop />
                            Skills
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#education" className="navLink">
                            <UilBookOpen />
                            Education
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#" className="navLink">
                            <UilSuitcaseAlt />
                            Projects
                        </a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#" className="navLink">
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
                <div className="themeToggle">
                    <UilMoon />
                </div>
                <div className="menuToggle" onClick={showHideMenu}>
                    <UilApps />
                </div>
            </div>
        </nav>
    )
}

export default Nav
