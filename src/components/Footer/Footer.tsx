import { useEffect, useState } from 'react'
import { footerButtons } from '../../assets/constants'
import s from "./Footer.module.css"
import "../../App.css"

const Footer = () => {
   const [time, setTime] = useState<Date>(new Date())

   useEffect(() => {
      setInterval(() => setTime(new Date()), 1000)
   }, [])

   return (
      <footer className={`${s.container} w95-nav`}>
         <div className={s.buttonsContainer}>
            {footerButtons.map(e =>
               <a className={`${s.taskbarButton} w95-button`} target="_blank" href={e.url} key={e.name}>
                  <i className={e.icon} />
                  {e.name}
               </a>
            )}
         </div>
         <time className={`${s.timer} w95-under`}>
            {`${time.toLocaleString('en-US', { hour: 'numeric', minute: "numeric", hour12: true })}`}
         </time>
      </footer>
   )
}

export default Footer