import React, { RefObject, useState } from 'react'
import s from "./Navbar.module.css"

type NavbarProps = {
   introRef: RefObject<HTMLDivElement>
   aboutRef: RefObject<HTMLDivElement>
   projectRef: RefObject<HTMLDivElement>
   contactRef: RefObject<HTMLDivElement>
}

const Navbar = (props: NavbarProps) => {

   const [active, setActive] = useState(false)

   const handleDisplay = () => {
      setActive(!active)
   }

   const handleNavigation = (elementRef: any) => {
      setActive(false)
      elementRef.current.scrollIntoView({ behavior: "smooth" });
   }

   return (
      <nav className={s.nav} style={{height: "90px"}}>
         <a style={{ display: "flex", padding: "2px 5px", height: "100%", width: "100%", maxHeight: "90px" }}>
            <img src="/images/japtext.gif" alt="icon" style={{ height: "auto", maxWidth: "100%", objectFit: "contain", objectPosition: "left" }} /> {/* handleRefresh() */}
         </a>
         <div></div>
         <div style={{ flexGrow: "1" }}>
            <ul className={`${s.navbarLinks} ${active && s.active}`}>
               <li><p onClick={() => handleNavigation(props.introRef)}>Intro</p></li>
               <li><p onClick={() => handleNavigation(props.aboutRef)}>About</p></li>
               <li><p onClick={() => handleNavigation(props.projectRef)}>Proyectos</p></li>
               <li><p onClick={() => handleNavigation(props.contactRef)}>Contacto</p></li>
               <li>
                  <a target="_blank" href="https://www.linkedin.com/in/soynicolasveron/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <p>LinkedIn</p>
                  </a>
               </li>
            </ul>
         </div>
         <div className={s.mobile} onClick={() => handleDisplay()}>
            <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
         </div>
      </nav>
   )
}

export default Navbar