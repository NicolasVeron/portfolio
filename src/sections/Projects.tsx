import React, { RefObject, useState, lazy, Suspense } from 'react'
import myProjects from "../assets/projects.json"
import s from "../styles/Projects.module.css"

type ProjectProps = {
   projectRef: RefObject<HTMLDivElement>
   contactRef: RefObject<HTMLDivElement>
}

const Win95Modal = lazy(() => import('../components/Win95Modal/Win95Modal'));

const Projects = ({ projectRef, contactRef }: ProjectProps) => {

   const [modalID, setModalID] = useState<number | null>(null)
   const [isOpen, setIsOpen] = useState<boolean>(false)

   const openModal = (id: number) => {
      setIsOpen(true)
      setModalID(id)
   }

   const closeModal = () => {
      setIsOpen(false)
      setModalID(9999)
   }

   return (
      <div ref={projectRef} className={s.background}>
         <div className={s.container}>
            <div className={s.content}>
               <div className={s.infoContainer}>
                  <div className={s.info}>
                     <h1>Proyectos</h1>
                     <p>
                        En esta sección muestro algunos de los proyectos que he realizado con los conocimientos
                        adquiridos. Actualmente sigo realizando más proyectos para apliar mi aprendizaje.
                     </p>
                     <div>
                        <a target="_blank" href="https://github.com/NicolasVeron"><h2>GitHub</h2></a>
                     </div>
                  </div>
                  <div className={s.imageContainer}>
                     <img src="/images/projects.jpg" alt="projects" />
                     <a target="_blank" href="https://github.com/NicolasVeron"><h2>GitHub</h2></a>
                  </div>
               </div>
               <div className={s.projects}>
                  {myProjects.map((p, i) =>
                     <div key={i} className={s.projectIcon} onClick={() => openModal(p.id)}>
                        <img src={`/images/${p.image}`} alt={p.name} />
                        <h2>{p.name}</h2>
                     </div>
                  )}
                  <Suspense fallback={<div>loading...</div>}>
                     <Win95Modal isOpen={isOpen} closeModal={closeModal} infoID={modalID} />
                  </Suspense>
               </div>
            </div>
            <div className={s.floor}>
               <div ref={contactRef} className={s.squares}>
                  <div className={s.lines}>
                     <div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Projects