import React, {useRef} from 'react'

const Skills = () => {
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
        <div className="skillsPage" id="skills">
            <h2>I'm adept in:</h2>
            <div className="skillsLayout">
                <div className="skill smallskill nodejsSkill" ref={nodejsSkillRef}>Node.JS</div>
                <div className="skill smallskill expressjsSkill" ref={expressjsSkillRef}>Express.JS</div>
                <div className="skill smallskill gitSkill" ref={gitSkillRef}>Git</div>
                <div className="skill smallskill mysqlSkill" ref={mysqlSkillRef}>MySQL</div>
                <div className="skill smallskill mongodbSkill" ref={mongodbSkillRef}>MongoDB</div>
                <div className="skill smallskill pythonSkill" ref={pythonSkillRef}>Python</div>
                <div className="skill smallskill javaSkill" ref={javaSkillRef}>Java</div>
                <div className="skill smallskill cssSkill" ref={cssSkillRef}>CSS</div>
                <div className="skill smallskill htmlSkill" ref={htmlSkillRef}>HTML</div>
                <div className="skill smallskill photoshopSkill" ref={photoshopSkillRef}>Photoshop</div>
                <div className="skill smallskill figmaSkill" ref={figmaSkillRef}>Figma</div>
                <div className="skill smallskill threejsSkill" ref={threejsSkillRef}>Three.JS</div>
                <div className="skill smallskill adobexdSkill" ref={adobexdSkillRef}>Adobe XD</div>
                <div className="skill largeskill c_cppSkill" ref={c_cppSkillRef}>C/C++</div>
                <div className="skill largeskill javascriptSkill" ref={javascriptSkillRef}>JavaScript</div>
                <div className="skill largeskill reactjsSkill" ref={reactjsSkillRef}>React.JS</div>
                <div className="skill largeskill illustratorSkill" ref={illustratorSkillRef}>Illustrator</div>
                <div className="skill uselessskill pos1"></div>
                <div className="skill uselessskill pos2"></div>
                <div className="skill uselessskill pos3"></div>
                <div className="skill uselessskill pos4"></div>
                <div className="skill uselessskill pos5"></div>
                <div className="skill uselessskill pos6"></div>
            </div>
        </div>
    )
}

export default Skills
