import React from 'react'

const About = ({theme}) => {
    return (
        <div className={`aboutPage ${theme ? "darkThemeBG" : ''}`} id="about">
            <h2>A Little Bit About Me:</h2>
            <div className="aboutLayout"></div>
        </div>
    )
}

export default About
