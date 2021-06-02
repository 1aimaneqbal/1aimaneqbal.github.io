import React from 'react'

const ProjectCard = ({Icon, Data}) => {
    return (
        <div className={`projectCard proj${Data[0]}`}>
            <div className="projectCardImage">
                {/* <img src="" alt="" /> */}
                <Icon />
            </div>
            <div className="projectCardInfo">
                <h4>{Data[1]}</h4>
                <div className="projectLinks">
                    <a href={Data[2]} target="_blank" >Source Code</a>
                    <a href={Data[3]} target="_blank" >Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
