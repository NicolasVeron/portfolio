import React, { useEffect, useRef } from 'react'
import s from "./Win95Modal.module.css"
import myProjects from "../../assets/projects.json"
import ModalDescriptions from '../ModalDescriptions/ModalDescriptions'

type ModalProps = {
   //children: React.ReactNode
   isOpen: any
   closeModal: any
   infoID: number | null
   // title
   // type
}

const Win95Modal = ({ isOpen, closeModal, infoID }: ModalProps) => {
   const content = useRef<null | HTMLElement>(null)

   const handlePropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation()
   }

   const project = myProjects.find(p => p.id === infoID)

   useEffect(() => {
      if (content.current !== null) {
         content.current.scroll(0, 0)
      }
   }, [isOpen])

   return (
      <div className={`${s.modal} ${isOpen && s.active}`} onClick={closeModal}>
         <div className={s.container} onClick={(e) => handlePropagation(e)}>
            <div>
               <div className={s.topModal}>
                  <div>
                     <i><img src={`/icons/${project?.icon}`} alt={project?.icon}/></i>
                     <h5>{project?.name}</h5>
                  </div>
                  <button onClick={closeModal}>x</button>
               </div>
               <div className={s.links}>
                  <p><a href={project?.deploy} target="_blank">Deploy</a></p>
                  <p><a href={project?.repository} target="_blank">Repositorio</a></p>
               </div>
               <div className={s.bottomModal}>
                  <h3/>
                  <div>
                     <section ref={content} className={s.modalContent}>
                        <ModalDescriptions id={project?.id}/>
                     </section>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Win95Modal