import React, {useRef} from 'react'

const Skills = ({theme}) => {
    const nodejsSkillRef = useRef(null)
    const expressjsSkillRef = useRef(null)
    const gitSkillRef = useRef(null)
    const mysqlSkillRef = useRef(null)
    const mongodbSkillRef = useRef(null)
    const pythonSkillRef = useRef(null)
    const javaSkillRef = useRef(null)
    const cssSkillRef = useRef(null)
    const htmlSkillRef = useRef(null)
    const photoshopSkillRef = useRef(null)
    const figmaSkillRef = useRef(null)
    const threejsSkillRef = useRef(null)
    const adobexdSkillRef = useRef(null)
    const c_cppSkillRef = useRef(null)
    const javascriptSkillRef = useRef(null)
    const reactjsSkillRef = useRef(null)
    const illustratorSkillRef = useRef(null)
    return (
        <div className={`skillsPage ${theme ? "darkThemeBG" : ''}`} id="skills">
            <h2>I'm Adept In:</h2>
            <div className="skillsLayout">
                <div className={`skill smallskill nodejsSkill ${theme ? "skilldarkBG" : ''}`} ref={nodejsSkillRef}>Node.JS</div>
                <div className={`skill smallskill expressjsSkill ${theme ? "skilldarkBG" : ''}`} ref={expressjsSkillRef}>Express.JS</div>
                <div className={`skill smallskill gitSkill ${theme ? "skilldarkBG" : ''}`} ref={gitSkillRef}>Git</div>
                <div className={`skill smallskill mysqlSkill ${theme ? "skilldarkBG" : ''}`} ref={mysqlSkillRef}>MySQL</div>
                <div className={`skill smallskill mongodbSkill ${theme ? "skilldarkBG" : ''}`} ref={mongodbSkillRef}>MongoDB</div>
                <div className={`skill smallskill pythonSkill ${theme ? "skilldarkBG" : ''}`} ref={pythonSkillRef}>Python</div>
                <div className={`skill smallskill javaSkill ${theme ? "skilldarkBG" : ''}`} ref={javaSkillRef}>Java</div>
                <div className={`skill smallskill cssSkill ${theme ? "skilldarkBG" : ''}`} ref={cssSkillRef}>CSS</div>
                <div className={`skill smallskill htmlSkill ${theme ? "skilldarkBG" : ''}`} ref={htmlSkillRef}>HTML</div>
                <div className={`skill smallskill photoshopSkill ${theme ? "skilldarkBG" : ''}`} ref={photoshopSkillRef}>Photoshop</div>
                <div className={`skill smallskill figmaSkill ${theme ? "skilldarkBG" : ''}`} ref={figmaSkillRef}>Figma</div>
                <div className={`skill smallskill threejsSkill ${theme ? "skilldarkBG" : ''}`} ref={threejsSkillRef}>Three.JS</div>
                <div className={`skill smallskill adobexdSkill ${theme ? "skilldarkBG" : ''}`} ref={adobexdSkillRef}>Adobe XD</div>
                <div className={`skill largeskill c_cppSkill ${theme ? "skilldarkBG" : ''}`} ref={c_cppSkillRef}>C/C++</div>
                <div className={`skill largeskill javascriptSkill ${theme ? "skilldarkBG" : ''}`} ref={javascriptSkillRef}>JavaScript</div>
                <div className={`skill largeskill reactjsSkill ${theme ? "skilldarkBG" : ''}`} ref={reactjsSkillRef}>React.JS</div>
                <div className={`skill largeskill illustratorSkill ${theme ? "skilldarkBG" : ''}`} ref={illustratorSkillRef}>Illustrator</div>
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
