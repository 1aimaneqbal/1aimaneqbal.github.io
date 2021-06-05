import {useEffect, useRef, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/styles.scss';
import Home from './components/main/Home'
import PhotoShopComponent from './components/ps'
import IllustratorComponent from './components/ai'
import PreLoader from './components/PreLoader';
function App() {
  const [theme, setTheme] = useState(false)
  // const cursorRef = useRef(null)
  // const cursorRef2 = useRef(null)
  // const [cursorLoc, setCursorLoc] = useState([ ])
  useEffect(()=>{
  //   document.addEventListener('mousemove', e =>{
  //     cursorRef.current.style.top=`${e.pageY - 10}px`
  //     cursorRef2.current.style.top=`${e.pageY - 10}px`
  //     cursorRef.current.style.left=`${e.pageX - 10}px`
  //     cursorRef2.current.style.left=`${e.pageX - 10}px`
  //   })
  const thisWhat="security"
  // document.onkeydown = e =>{
  //   if(e.key==="F12"){
  //     return false
  //   }
  //   if(e.ctrlKey && (e.key==="U" || e.key==="u")){
  //     return false
  //   }
  // }
  // document.addEventListener('contextmenu', e =>{
  //   e.preventDefault()
  // })
  }, [])
  return (
    <>
      <PreLoader theme={theme} />
      <Router>
        <Route path="/" exact >
          <Home theme={theme} setTheme={setTheme}/>
        </Route>
        <Route path="/Hobbies/Photoshop" exact >
          <PhotoShopComponent theme={theme} setTheme={setTheme}/>
        </Route>
        <Route path="/Hobbies/Illustrator" exact >
          <IllustratorComponent theme={theme} setTheme={setTheme}/>
        </Route>
      </Router>
      {/* <div className="cursor" ref={cursorRef} />
      <div className="cursor2" ref={cursorRef2} /> */}
    </>
  );
}

export default App;
