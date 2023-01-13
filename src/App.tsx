import { useEffect, useRef } from 'react'
import './App.css'
import { About, Footer, Introduction, Projects } from './sections'
import Navbar from './components/Navbar/Navbar'

function App() {
   const introRef = useRef<HTMLDivElement>(null)
   const aboutRef = useRef<HTMLDivElement>(null)
   const projectRef = useRef<HTMLDivElement>(null)
   const contactRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      window.scroll({ top: 0, behavior: 'smooth' })
   }, [])

   return (
      <div className="App">
         <Navbar introRef={introRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef}/> {/* @_@ */}
         <Introduction currRef={introRef} />
         <About currRef={aboutRef} />
         <Projects projectRef={projectRef} contactRef={contactRef}/>
         <Footer/>
      </div>
   )
}

export default App
