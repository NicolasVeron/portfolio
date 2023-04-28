import { ProjectTypes } from "../../types/index"
import { WindowHeader } from '..'
import s from "./ProjectCard.module.css"
import "../../App.css"

type Props = {
   project: ProjectTypes
}

const ProjectCard = ({ project }: Props) => {

   return (
      <article className={`${s.cardContainer} w95-layout`}>
         <WindowHeader
            icon={`/icons/${project.icon}`}
            title={project.name}
         />
         <div className={s.content}>
            <figure className={s.projectWrapper}>
               <div className={s.imageContainer}>
                  <img src={project.image} alt={project.name} className='w95-under' />
               </div>
               <figcaption className={s.info}>
                  <h3>{project.name}</h3>
                  <p dangerouslySetInnerHTML={{ __html: project.description }} />
                  <p>{`SKILLS: ${project.skills}`}</p>
               </figcaption>
            </figure>
         </div>
         <footer className={s.links}>
            <a className={`${s.insbutton} w95-button`} target="_blank" href={project.deploy}><span>Deploy</span></a>
            <a className={`${s.insbutton} w95-button`} target="_blank" href={project.repository}><span>Repositorio</span></a>
         </footer>
      </article>
   )
}

export default ProjectCard