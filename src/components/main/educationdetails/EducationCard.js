import React from 'react'

const EducationCard = ({Data}) => {
    return (
        <div className="educationCard">
            <div className="percentage">
                <svg height="80px" width="80px">
                    <circle r="35px" cx="40px" cy="40px" className="progressBackground"/>
                    <circle r="35px" cx="40px" cy="40px" className={`progress progress${Data[1]}`}/>
                </svg>
                <div className="progressShadow"></div>
                <p>{Data[0]}</p>
            </div>
            <div className="info">
                <h3>{Data[2]==1 ? `Class ${Data[1]}` : Data[1]}</h3>
                <h4>{Data[3]}</h4>
                <p>{Data[4]}</p>
            </div>
        </div>
    )
}

export default EducationCard
