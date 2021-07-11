import React from 'react'
import Logo from '../images/Logo.png'
import LogoOutline from '../images/LogoOutline.png'
import LogoOutlineDark from '../images/LogoOutlineDark.png'

const PreLoader = ({theme}) => {
    return (
        <div className={`startLogoContainer ${theme ? 'darkThemeBG' : ''}`}>
            <div className={`box ${theme ? 'boxDark' : ''}`}>
                <div className="LogoOutline">
                    {
                        theme ?
                        <img src={LogoOutlineDark} alt="" />
                        :
                        <img src={LogoOutline} alt="" />
                    }
                </div>
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PreLoader
