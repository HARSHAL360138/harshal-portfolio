import BackToTopButton from './components/BackToTopButton'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import 'animate.css';



function App() {

  return (
    <div>
        <Navbar />  
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <BackToTopButton/>
     
    </div>
  )
}

export default App
