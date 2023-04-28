import { RefObject } from 'react'
import { ProjectCard } from '../components'
import myProjects from "../assets/projects.json"
import s from "../styles/Projects.module.css"
import "../App.css"

type ProjectProps = {
   projectRef: RefObject<HTMLElement>
}

const Projects = ({ projectRef }: ProjectProps) => {

   return (
      <section ref={projectRef} className={s.background}>
         <div className={s.container}>
            <div className={s.content}>
               <header className={s.infoContainer}>
                  <h1 className='w95-button'>Proyectos</h1>
               </header>
               <div className={s.projects}>
                  {myProjects.map((p, i) =>
                     <ProjectCard project={p} key={i} />
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Projects