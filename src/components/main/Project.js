import React from 'react'
import { UilCloudSun, UilHeadphonesAlt, UilClipboardNotes, UilDocumentLayoutLeft, UilAdjustCircle,   UilArrowCircleRight  } from '@iconscout/react-unicons'
import ProjectCard from './cards/ProjectCard'

const Project = () => {
    const Project1 = [1, "Weather App", "https://github.com/1aimaneqbal/weather", "https://1aimaneqbal.github.io/weather"]
    const Project2 = [2, "iMusic", "https://github.com/1aimaneqbal/iMusic", "https://1aimaneqbal.github.io/iMusic/"]
    const Project3 = [3, "Todo List", "https://github.com/1aimaneqbal/todo", "https://1aimaneqbal.github.io/todo/"]
    const Project4 = [4, "iBlog *WIP*", "#", "#"]
    const Project5 = [5, "3D Planets", "https://github.com/1aimaneqbal/3d-planets", "https://1aimaneqbal.github.io/3d-planets/"]
    const Project6 = [6, "- - -", "#", "#"]
    const Project7 = [7, "- - -", "#", "#"]
    return (
        <div className="projectPage" id="project">
            <h2>My Creations:</h2>
            <div className="projectLayout">
                <ProjectCard Icon={UilCloudSun} Data={Project1} />
                <ProjectCard Icon={UilHeadphonesAlt} Data={Project2} />
                <ProjectCard Icon={UilClipboardNotes} Data={Project3} />
                <ProjectCard Icon={UilDocumentLayoutLeft} Data={Project4} />
                <ProjectCard Icon={UilAdjustCircle} Data={Project5} />
                <ProjectCard Icon={UilCloudSun} Data={Project6} />
                <ProjectCard Icon={UilCloudSun} Data={Project7} />
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
