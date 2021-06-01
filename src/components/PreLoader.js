import React from 'react'
import Logo from '../images/Logo.png'
import LogoOutline from '../images/LogoOutline.png'

const PreLoader = () => {
    return (
        <div className="startLogoContainer">
            <div className="box">
                <div className="LogoOutline">
                    <img src={LogoOutline} alt="" />
                </div>
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PreLoader
