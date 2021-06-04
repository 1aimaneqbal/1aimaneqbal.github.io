import React from 'react'

const HobbyCard = ({img, theme, name}) => {
    return (
        <div className="hobbyCard">
            <img src={img} alt="" />
            <h4 className={`hobbyCardText ${theme ? 'hobbyCardTextDark': ''}`}>{name}</h4>
        </div>
    )
}

export default HobbyCard