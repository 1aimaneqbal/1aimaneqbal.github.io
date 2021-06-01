import React from 'react'
import EducationCard from './educationdetails/EducationCard'

const Education = () => {
    const X = [91.6, "X", "1", "2012-2013", "Guru Nanak Higher Sceondary School, Ranchi"]
    const XII = [76.6, "XII", "1", "2014-2015", "Guru Nanak Higher Sceondary School, Ranchi"]
    const BCA = [81.1, "BCA", "0", "2016-2019", "Birla Institute of Technology, Mesra"]
    const MCA = [91.2, "MCA", "0", "2019-2022", "Birla Institute of Technology, Mesra"]
    return (
        <div className="educationPage" id="education">
            <h2>My Educational History:</h2>
            <div className="educationLayout">
                <div className="educationProgress">
                    <div className="educationProgressStops"></div>
                    <div className="educationProgressStops"></div>
                    <div className="educationProgressStops"></div>
                    <div className="educationProgressStops"></div>
                </div>
                <div className="educationCards">
                    <EducationCard Data={X}/>
                    <EducationCard Data={XII}/>
                    <EducationCard Data={BCA}/>
                    <EducationCard Data={MCA}/>
                </div>
            </div>
        </div>
    )
}

export default Education
