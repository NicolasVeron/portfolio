import React, { RefObject } from 'react'
import s from "../styles/About.module.css"
import CV from "../assets/CV - Nicolas Veron.pdf"

type AboutProps = {
   currRef: RefObject<HTMLDivElement>
}

const About = ({ currRef }: AboutProps) => {
   return (
      <div ref={currRef} className={s.background}>
         <div className={s.contents}>
            <div className={s.imageContainer}>
               <img src="/images/about.jpg" alt="about" />
            </div>
            <div className={s.info}>
               <h1>Sobre mi</h1>
               <div>
                  <p>
                     Me llamo Nicolas Verón, soy de Buenos Aires, Argentina.
                     y mi focus principal es el diseño de Front-End.
                  </p>
                  <p>
                     Empece en la programacion porque me gusta crear cosas nuevas y es interesante
                     saber como funcionan desde atras.
                  </p>
               </div>
               <div className={s.h2container}>
                  <a href={CV} download><h2>Descargar CV</h2></a>
               </div>
            </div>
         </div>
         <div className={s.gradientBackground}></div>
      </div>
   )
}

export default About