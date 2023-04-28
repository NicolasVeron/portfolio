import { RefObject } from 'react'
import { ContactForm } from '../components'
import s from "../styles/Contact.module.css"

type ContactProps = {
   currRef: RefObject<HTMLElement>
}

const Contact = ({ currRef }: ContactProps) => {
   return (
      <section ref={currRef} className={s.background}>
         <ContactForm />
      </section>
   )
}

export default Contact