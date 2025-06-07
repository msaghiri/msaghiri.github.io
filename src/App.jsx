import './App.css'
import Header from './Header.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import React, {useRef} from "react";



function App() {
  const aboutRef = React.createRef();
  const projectsRef = React.createRef();

  return (
    <div className="app-container">
      <Header aboutRef = {aboutRef} />
      <About references = {{aboutRef, projectsRef}} />
      <Projects projectsRef = {projectsRef}/>
    </div>
  )
}

export default App
