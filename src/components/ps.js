import React from 'react'
import Logo from '../images/Logo.png'
import {NavLink} from 'react-router-dom'
import { UilMoon, UilSun, UilApps, UilTimes, UilEstate, UilBookOpen, UilUser, UilDesktop, UilCommentImage, UilSuitcaseAlt } from '@iconscout/react-unicons'

const ps = ({theme, setTheme}) => {
    const themeToggle = () =>{
        setTheme(!theme)
    }
    return (
        <nav className={`${theme ? 'navDark' : ''}`}>
            <div className="navLogo">
                <NavLink to="/"><img src={Logo}/></NavLink>
            </div>
            PhotoShop
            <div className="navToggle">
                <div className='themeToggle' onClick={themeToggle}>
                    {theme ? <UilSun /> : <UilMoon /> }
                </div>
            </div>
        </nav>
    )
}

export default ps
