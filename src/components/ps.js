import React, { useState } from 'react'
import Logo from '../images/Logo.png'
import {NavLink} from 'react-router-dom'
import { UilMoon, UilSun, UilTimes } from '@iconscout/react-unicons'
import posters from '../assets/postersData'

const Ps = ({theme, setTheme}) => {
    const posterData = posters()
    const [show, setShow] = useState(false)
    const [tempImg, setTempImg] = useState('')
    const showImg = (poster) => {
        setTempImg(poster)
        setShow(true)
        console.warn(poster)
    }
    const themeToggle = () =>{
        setTheme(!theme)
    }
    return (
        <>
            <nav className={`${theme ? 'navDark' : ''}`}>
                <div className="navLogo">
                    <NavLink to="/"><img src={Logo}/></NavLink>
                </div>
                <h3 style={{color: "rgb(88, 80, 236)"}}>Posters</h3>
                <div className="navToggle">
                    <div className='themeToggle' onClick={themeToggle}>
                        {theme ? <UilSun /> : <UilMoon /> }
                    </div>
                </div>
            </nav>
            <div className={show? "show open": "show"}>
                <img src={tempImg} />
                <UilTimes onClick={()=>setShow(false)} />
            </div>
            <div className={`posterContainer ${theme ? "darkThemeBG" : ''}`}>
                {
                    posterData.map(poster=>(
                        <div key={poster.key} className="poster" onClick={()=>showImg(poster.img)}>
                            <img src={poster.img} style={{width: '100%'}}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Ps
