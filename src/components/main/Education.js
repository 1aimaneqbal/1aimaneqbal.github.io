import React from 'react'
import EducationCard from './cards/EducationCard'

const Education = ({theme}) => {
    const X = [91.6, "X", "1", "2012-2013", "Guru Nanak Higher Sceondary School, Ranchi"]
    const XII = [76.6, "XII", "1", "2014-2015", "Guru Nanak Higher Sceondary School, Ranchi"]
    const BCA = [81.1, "BCA", "0", "2016-2019", "Birla Institute of Technology, Mesra"]
    const MCA = [92.7, "MCA", "0", "2019-2022", "Birla Institute of Technology, Mesra"]
    return (
        <div className={`educationPage ${theme ? "darkThemeBG" : ''}`} id="education">
            <h2>My Educational History</h2>
            <div className="educationLayout">
                <div className="educationProgress">
                    <div className="educationProgressStops"></div>
                    <div className="educationProgressStops"></div>
                    <div className="educationProgressStops"></div>
                    <div className="educationProgressStops"></div>
                </div>
                <div className="educationCards">
                    <EducationCard Data={X} theme={theme}/>
                    <EducationCard Data={XII} theme={theme}/>
                    <EducationCard Data={BCA} theme={theme}/>
                    <EducationCard Data={MCA} theme={theme}/>
                </div>
            </div>
        </div>
    )
}

export default Education
