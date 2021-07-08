import React from 'react'
import AboutImage from "../../images/About.png"
import { UilHeartAlt, UilFacebookF, UilInstagram, UilGithubAlt, UilLinkedinAlt, UilEnvelope, UilDownloadAlt } from '@iconscout/react-unicons'
import CV from "../../assets/AIMAN EQBAL.pdf"
const About = ({theme}) => {
    return (
        <div className={`aboutPage ${theme ? "darkThemeBG" : ''}`} id="about">
            <h2>A Little Bit About Me</h2>
            <div className="aboutLayout">
                <div className="aboutImage">
                    <img src={AboutImage} />
                </div>
                <div className="aboutInfo">
                    <h3 className={`aboutInfoHeading ${theme ? 'aboutInfoHeadingDark' : '' }`}>Hey there! My name is Aiman Eqbal</h3>
                    <p className={`aboutInfoDesc ${theme ? 'aboutInfoDescDark' : '' }`}>I'm a Ranchi based tech enthusiast & a programmer who loves desiging and developement.
                        <br />Hard-working, curious, mostly self taught & a quick learner who flourishes under pressure and is eager to learn new technologies.
                        <br />Would love to visit Japan someday. <UilHeartAlt />
                    </p>
                    <ul className="contactLinks">
                        <li>
                            <a href="https://facebook.com/1aimaneqbal" target="_blank" className={`contactLink ${theme ? 'contactLinkDark' : ''}`}><UilFacebookF /></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/aiman.eqbal.io/" target="_blank" className={`contactLink ${theme ? 'contactLinkDark' : ''}`}><UilInstagram /></a>
                        </li>
                        <li>
                            <a href="https://github.com/1aimaneqbal" target="_blank" className={`contactLink ${theme ? 'contactLinkDark' : ''}`}><UilGithubAlt /></a>
                        </li>
                        <li>
                            <a href="#" target="_blank" className={`contactLink ${theme ? 'contactLinkDark' : ''}`}><UilLinkedinAlt /></a>
                        </li>
                        <li>
                            <a href="mailto:1aimaneqbal@gmail.com" target="_blank" className={`contactLink ${theme ? 'contactLinkDark' : ''}`}><UilEnvelope /></a>
                        </li>
                    </ul>
                    <a download="" href={CV} className="downloadCV">Download CV <UilDownloadAlt /></a>
                </div>
            </div>
        </div>
    )
}

export default About
