import React from 'react'
import Navbar from './Nav'
import Landing from './Landing';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Project from './Project';
import Hobbies from './Hobbies';

const Home = ({theme, setTheme}) => {
    return (
        <>
            <Navbar theme={theme} setTheme={setTheme}/>
            <Landing theme={theme} />
            <About theme={theme}/>
            <Education theme={theme}/>
            <Skills theme={theme}/>
            <Project theme={theme}/>
            <Hobbies theme={theme} />
        </>
    )
}

export default Home
