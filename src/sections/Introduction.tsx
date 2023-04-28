import { RefObject } from 'react'
import { CommandInfo, WindowHeader } from '../components'
import { icons } from '../assets/constants'
import s from "../styles/Introduction.module.css"
import "../App.css"

type IntroProps = {
   currRef: RefObject<HTMLElement>
}

const Introduction = ({ currRef }: IntroProps) => {
   return (
      <section ref={currRef} className={s.background}>
         <div className={s.container}>
            <div className="w95-layout">
               <WindowHeader 
               icon={icons.cmd}
               title='Command prompt'
               />
               <CommandInfo/>
            </div>
         </div>
      </section>
   )
}

export default Introduction