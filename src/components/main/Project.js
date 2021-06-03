import React from 'react'
import { UilCloudSun, UilHeadphonesAlt, UilClipboardNotes, UilDocumentLayoutLeft, UilAdjustCircle, UilCoronavirus,  UilArrowCircleRight  } from '@iconscout/react-unicons'
import { ReactComponent as UtilTicTacToe } from "../../images/tictactoe.svg"
import ProjectCard from './cards/ProjectCard'

const Project = ({theme}) => {
    const Project1 = [1, "Weather App", "https://github.com/1aimaneqbal/weather", "https://1aimaneqbal.github.io/weather"]
    const Project2 = [2, "iMusic", "https://github.com/1aimaneqbal/iMusic", "https://1aimaneqbal.github.io/iMusic/"]
    const Project3 = [3, "Todo List", "https://github.com/1aimaneqbal/todo", "https://1aimaneqbal.github.io/todo/"]
    const Project4 = [4, "iBlog", "https://github.com/1aimaneqbal/iBlog", "https://github.com/1aimaneqbal/iBlog"]
    const Project5 = [5, "3D Planets", "https://github.com/1aimaneqbal/3d-planets", "https://1aimaneqbal.github.io/3d-planets/"]
    const Project6 = [6, "Covid Tracker", "https://github.com/1aimaneqbal/covid-tracker-india", "https://github.com/1aimaneqbal/covid-tracker-india"]
    const Project7 = [7, "TicTacToe", "https://github.com/1aimaneqbal/tictactoe", "https://1aimaneqbal.github.io/tictactoe/"]
    return (
        <div className={`projectPage ${theme ? "darkThemeBG" : ''}`} id="project">
            <h2>My Creations:</h2>
            <div className="projectLayout">
                <ProjectCard Icon={UilCloudSun} Data={Project1} theme={theme}/>
                <ProjectCard Icon={UilHeadphonesAlt} Data={Project2} theme={theme}/>
                <ProjectCard Icon={UilClipboardNotes} Data={Project3} theme={theme}/>
                <ProjectCard Icon={UilDocumentLayoutLeft} Data={Project4} theme={theme}/>
                <ProjectCard Icon={UilAdjustCircle} Data={Project5} theme={theme}/>
                <ProjectCard Icon={UilCoronavirus} Data={Project6} theme={theme}/>
                <ProjectCard Icon={UtilTicTacToe} Data={Project7} theme={theme}/>
                <div className="projn">
                    <a href="https://github.com/1aimaneqbal?tab=repositories" target="_blank">
                        <UilArrowCircleRight />
                        <p>View More</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
