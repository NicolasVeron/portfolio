import { useEffect, useRef } from 'react'
import { Navbar, Footer } from './components'
import { Contact, Introduction, Projects } from './sections'
import './App.css'

function App() {
   const introRef = useRef<HTMLElement>(null)
   const projectRef = useRef<HTMLElement>(null)
   const contactRef = useRef<HTMLElement>(null)

   useEffect(() => {
      window.scroll({ top: 0, behavior: 'smooth' })
   }, [])

   return (
      <div className="App">
         <Navbar introRef={introRef} projectRef={projectRef} contactRef={contactRef}/>
         <Introduction currRef={introRef} />
         <Projects projectRef={projectRef}/>
         <Contact currRef={contactRef}/>
         <Footer/>
      </div>
   )
}

export default App
