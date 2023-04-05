import React, { useRef } from 'react'
import s from "./ProjectIntro.module.css"
import { ProjectTypes } from "../../types/index"

type Props = {
   project: ProjectTypes,
   setIsOpen: (isOpen: boolean) => void,
   setModalID: (modalID: number) => void
}

const ProjectIntro = ({ project, setIsOpen, setModalID }: Props) => {
   const videoRef = useRef<null | HTMLVideoElement>(null)

   const handleMouseOver = () => {
      videoRef.current?.play()
   }

   const handleMouseLeave = () => {
      videoRef.current?.pause()
   }

   const openModal = (id: number) => {
      setIsOpen(true)
      setModalID(id)
   }

   return (
      <div className={s.projectIcon} onClick={() => openModal(project.id)} onMouseOver={() => handleMouseOver()} onMouseLeave={() => handleMouseLeave()}>
         <video src={`/images/${project.image}`} ref={videoRef} loop muted />
         <h2>{project.name}</h2>
      </div>
   )
}

export default ProjectIntro