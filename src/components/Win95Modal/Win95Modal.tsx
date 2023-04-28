import React from 'react'
import ReactDOM from 'react-dom'
import { WindowHeader } from '..'
import { icons } from '../../assets/constants'
import s from "./Win95Modal.module.css"
import "../../App.css"

type ModalProps = {
   setOpen: (b: boolean) => void
}

const Win95Modal = ({ setOpen }: ModalProps) => {
   const { VITE_RESUME_URL } = import.meta.env
   let reactPortal = document.getElementById("react-portal")

   if (!reactPortal) {
      const newDiv = document.createElement('div')
      reactPortal = document.body.appendChild(newDiv)
      reactPortal.id = "react-portal"
   }

   const handlePropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation()
   }

   return (
      <>
         {ReactDOM.createPortal(
            <div className={s.modalBackground} onClick={() => setOpen(false)}>
               <div className={`${s.container} w95-layout`} onClick={(e) => handlePropagation(e)}>
                  <WindowHeader
                     icon={icons.briefcase}
                     title="Resume"
                     cross
                     crossAction={() => setOpen(false)}
                  />
                  <nav className={s.links}>
                     <p><a href="/CV - Nicolas Veron.pdf" download>Descarga</a></p>
                     <p><a href="/CV - Nicolas Veron.pdf" target="_blank">Nueva pestaña</a></p>
                  </nav>
                  <div className={s.bottomModal}>
                     <div>
                        <section className={`${s.modalContent} w95-under`}>
                           <iframe src={VITE_RESUME_URL} allow="autoplay" />
                        </section>
                     </div>
                  </div>
               </div>
            </div>,
            reactPortal
         )}
      </>
   )
}

export default Win95Modal