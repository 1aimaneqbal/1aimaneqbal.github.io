import React from 'react'
import { NavLink } from 'react-router-dom'
import { UilExternalLinkAlt } from '@iconscout/react-unicons'
import HobbyeSports from "../../images/HobbyeSports.png"
import HobbyAnime from "../../images/HobbyAnime.png"
import HobbyBadminton from "../../images/HobbyBadminton.png"
import HobbyGuitar from "../../images/HobbyGuitar.png"
import HobbyCard from './cards/HobbyCard'

const Hobbies = ({theme}) => {
    return (
        <div className={`hobbiesPage ${theme ? "darkThemeBG" : ''}`} id="hobbies">
            <h2>What I do In Spare Time</h2>
            <div className="aboutLayout">
                <div className="graphicsLayout">
                    <h3 className={`hobbiesTitle ${theme ? 'hobbiesTitleDark': ''}`}>Graphic Designing</h3>
                    <div className="routes">
                        <NavLink to="/Hobbies/Illustrator">
                            <div className={`btnRoute ${theme ? 'btnRouteDark': ''}`}>
                                <h5>Vectors</h5>
                                <UilExternalLinkAlt />
                            </div>
                        </NavLink>
                        <NavLink to="/Hobbies/Photoshop">
                            <div className={`btnRoute ${theme ? 'btnRouteDark': ''}`}>
                                <h5>Photoshop</h5>
                                <UilExternalLinkAlt />
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="otherHobbies">
                    <h3 className={`hobbiesTitle ${theme ? 'hobbiesTitleDark': ''}`}>Other Hobbies</h3>
                    <div className="hobbiesList">
                        <HobbyCard img={HobbyeSports} theme={theme} name={"eSports"} />
                        <HobbyCard img={HobbyAnime} theme={theme} name={"Anime"} />
                        <HobbyCard img={HobbyBadminton} theme={theme} name={"Badminton"} />
                        <HobbyCard img={HobbyGuitar} theme={theme} name={"Guitar"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies
