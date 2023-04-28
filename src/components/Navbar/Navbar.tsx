import { RefObject, useState } from 'react'
import { icons, contactURLs } from '../../assets/constants'
import s from "./Navbar.module.css"

type NavbarProps = {
   introRef: RefObject<HTMLElement>
   projectRef: RefObject<HTMLElement>
   contactRef: RefObject<HTMLElement>
}

const Navbar = (props: NavbarProps) => {
   const [active, setActive] = useState(false)

   const handleDisplay = () => {
      setActive(!active)
   }

   const handleNavigation = (elementRef: RefObject<HTMLElement>) => {
      setActive(false)
      elementRef?.current?.scrollIntoView({ behavior: "smooth" });
   }

   return (
      <header className={`${s.nav} w95-nav`}>
         <div className={s.leftNav}>
            <a className={s.name}>
               <img src={icons.computer} alt="computer icon" />
               Nicolas Verón
            </a>
            <div className={s.toggler} onClick={() => handleDisplay()}>
               <img src={active ? icons.folderOpen : icons.folderClosed} />
            </div>
         </div>
         <nav className={`${s.linksContainer} ${active && s.active}`}>
            <ul className={s.navbarLinks}>
               <li onClick={() => handleNavigation(props.introRef)}><p>Home</p></li>
               <li onClick={() => handleNavigation(props.projectRef)}><p>Proyectos</p></li>
               <li onClick={() => handleNavigation(props.contactRef)}><p>Contacto</p></li>
               <li>
                  <a target="_blank" href={contactURLs.linkedin}>
                     <i className="fa-brands fa-linkedin-in fa-lg" />
                     <p>LinkedIn</p>
                  </a>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Navbar