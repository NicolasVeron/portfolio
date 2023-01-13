import React from 'react'
import Contact from '../components/Contact/Contact'
import s from "../styles/Footer.module.css"

const Footer = () => {
   return (
      <div className={s.background}>
         <div className={s.contact}>
            <Contact />
         </div>
         <div className={s.squares}/>
         <div className={s.gradientBackground}/>
         <div className={s.links}>
            <ul>
               <li><a target="_blank" href="https://www.linkedin.com/in/soynicolasveron/">linkedin</a></li>
               <li><a target="_blank" href="https://github.com/NicolasVeron">github</a></li>
            </ul>
         </div>
      </div>
   )
}

export default Footer