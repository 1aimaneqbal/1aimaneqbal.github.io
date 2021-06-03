import React, {useEffect, useRef} from 'react'
import LandingAvatar from '../../images/LandingAvatar.png'
import Navbar from './Nav'
import Skills from './Skills';
import Education from './Education';
import Project from './Project';
import Landing from './Landing';
const Home = ({theme, setTheme}) => {
    return (
        <>
            <Navbar theme={theme} setTheme={setTheme}/>
            <Landing theme={theme} />
            <Education theme={theme}/>
            <Skills theme={theme}/>
            <Project theme={theme}/>
        </>
    )
}

export default Home
