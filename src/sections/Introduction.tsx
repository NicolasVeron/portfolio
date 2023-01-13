import React, { RefObject } from 'react'
import s from "../styles/Introduction.module.css"

type IntroProps = {
   currRef: RefObject<HTMLDivElement>
}

const Introduction = ({currRef}: IntroProps) => {
   return (
      <div ref={currRef} className={s.background}>
         <div className={s.container}>
            <div className={s.content}>
               <h1 className={s.title}>Verón Nicolas</h1>
               <div className={s.subcontent}>
                  <p>
                     Full-Stack Web Developer.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Introduction