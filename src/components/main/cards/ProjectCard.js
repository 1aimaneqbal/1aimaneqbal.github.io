import React from 'react'

const ProjectCard = ({Icon, Data, theme}) => {
    return (
        <div className={`projectCard proj${Data[0]} ${theme ? 'projectdarkBG' :''}`}>
            <div className={`projectCardImage ${theme? 'projectCardImageDark' :''}`}>
                {/* <img src="" alt="" /> */}
                <Icon />
            </div>
            <div className="projectCardInfo">
                <h4 className="projectCardInfoTitle">{Data[1]}</h4>
                <div className="projectLinks">
                    <a href={Data[2]} target="_blank" className={`${theme ? 'projectLinkDark' : ''}`}>Source Code</a>
                    <a href={Data[3]} target="_blank" className={`${theme ? 'projectLinkDark' : ''}`}>Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
