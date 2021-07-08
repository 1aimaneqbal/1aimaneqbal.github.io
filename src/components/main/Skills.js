import React from 'react'

const Skills = ({theme}) => {
    return (
        <div className={`skillsPage ${theme ? "darkThemeBG" : ''}`} id="skills">
            <h2>I'm Adept In</h2>
            <div className="skillsLayout">
                <div className={`skill smallskill nodejsSkill ${theme ? "skilldarkBG" : ''}`}>Node.JS</div>
                <div className={`skill smallskill expressjsSkill ${theme ? "skilldarkBG" : ''}`}>Express.JS</div>
                <div className={`skill smallskill gitSkill ${theme ? "skilldarkBG" : ''}`}>Git</div>
                <div className={`skill smallskill mysqlSkill ${theme ? "skilldarkBG" : ''}`}>MySQL</div>
                <div className={`skill smallskill mongodbSkill ${theme ? "skilldarkBG" : ''}`}>MongoDB</div>
                <div className={`skill smallskill pythonSkill ${theme ? "skilldarkBG" : ''}`}>Python</div>
                <div className={`skill smallskill javaSkill ${theme ? "skilldarkBG" : ''}`}>Java</div>
                <div className={`skill smallskill cssSkill ${theme ? "skilldarkBG" : ''}`}>CSS</div>
                <div className={`skill smallskill htmlSkill ${theme ? "skilldarkBG" : ''}`}>HTML</div>
                <div className={`skill smallskill photoshopSkill ${theme ? "skilldarkBG" : ''}`}>Photoshop</div>
                <div className={`skill smallskill figmaSkill ${theme ? "skilldarkBG" : ''}`}>Figma</div>
                <div className={`skill smallskill threejsSkill ${theme ? "skilldarkBG" : ''}`}>Three.JS</div>
                <div className={`skill smallskill adobexdSkill ${theme ? "skilldarkBG" : ''}`}>Adobe XD</div>
                <div className={`skill largeskill c_cppSkill ${theme ? "skilldarkBG" : ''}`}>C/C++</div>
                <div className={`skill largeskill javascriptSkill ${theme ? "skilldarkBG" : ''}`}>JavaScript</div>
                <div className={`skill largeskill reactjsSkill ${theme ? "skilldarkBG" : ''}`}>React.JS</div>
                <div className={`skill largeskill illustratorSkill ${theme ? "skilldarkBG" : ''}`}>Illustrator</div>
                <div className={`skill uselessskill pos1 ${theme ? "skilldarkBG" : ''}`}></div>
                <div className={`skill uselessskill pos2 ${theme ? "skilldarkBG" : ''}`}></div>
                <div className={`skill uselessskill pos3 ${theme ? "skilldarkBG" : ''}`}></div>
                <div className={`skill uselessskill pos4 ${theme ? "skilldarkBG" : ''}`}></div>
                <div className={`skill uselessskill pos5 ${theme ? "skilldarkBG" : ''}`}></div>
                <div className={`skill uselessskill pos6 ${theme ? "skilldarkBG" : ''}`}></div>
            </div>
        </div>
    )
}

export default Skills
