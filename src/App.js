import {useEffect, useRef, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/styles.scss';
import Home from './components/main/Home'
import PhotoShopComponent from './components/ps'
import IllustratorComponent from './components/ai'
import Navbar from './components/Nav'
import PreLoader from './components/PreLoader';
import Skills from './components/main/Skills';
import Education from './components/main/Education';
import Project from './components/main/Project';
function App() {
  // const cursorRef = useRef(null)
  // const cursorRef2 = useRef(null)
  // const [cursorLoc, setCursorLoc] = useState([ ])
  // useEffect(()=>{
  //   document.addEventListener('mousemove', e =>{
  //     cursorRef.current.style.top=`${e.pageY - 10}px`
  //     cursorRef2.current.style.top=`${e.pageY - 10}px`
  //     cursorRef.current.style.left=`${e.pageX - 10}px`
  //     cursorRef2.current.style.left=`${e.pageX - 10}px`
  //   })
  // }, [])
  return (
    <>
      <PreLoader />
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}/>
        <Education />
        <Skills />
        <Project />
        <Route path="/OtherProjects/Photoshop" exact component={PhotoShopComponent}/>
        <Route path="/OtherProjects/Illustrator" exact component={IllustratorComponent}/>
      </Router>
      {/* <div className="cursor" ref={cursorRef} />
      <div className="cursor2" ref={cursorRef2} /> */}
    </>
  );
}

export default App;
