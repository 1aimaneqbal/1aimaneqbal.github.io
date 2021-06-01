import React, {useRef} from 'react'
import Logo from '../images/Logo.png'
import {NavLink} from 'react-router-dom'
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
                        <a href="#" className="navLink">Home</a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#" className="navLink">About</a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#skills" className="navLink">Skills</a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#education" className="navLink">Education</a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#" className="navLink">Projects</a>
                    </li>
                    <li onClick={showHideMenu}>
                        <a href="#" className="navLink">Hobbies</a>
                    </li>
                </ul>
                <div className="navClose" onClick={showHideMenu}>x</div>
            </div>
            <div className="navToggle" onClick={showHideMenu}>o</div>
        </nav>
    )
}

export default Nav
