import {useEffect, useState} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import './styles/styles.scss';
import Home from './components/main/Home'
import PhotoShopComponent from './components/ps'
import IllustratorComponent from './components/ai'
import PreLoader from './components/PreLoader';
function App() {
  const [theme, setTheme] = useState(getInitialMode())
  useEffect(()=>{
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
  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])
  function getInitialMode() {
    const isReturningUser = "theme" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("theme"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
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
    </>
  );
}

export default App;
