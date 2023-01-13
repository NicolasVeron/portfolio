import React from 'react'
import s from "./Contact.module.css"
import useForm from '../../assets/hooks/useForm'

const Contact = () => {

   const InitialState = {
      name: "",
      email: "",
      message: ""
   }

   const {
      input,
      errors,
      success,
      handleInput,
      handleSubmit
   } = useForm(InitialState)

   return (
      <div className={s.container}>
         <div className={s.topModal}>
            <div>
               <i><img src="/icons/letter.ico" alt="letter.ico" /></i>
               <h5>Contacto</h5>
            </div>
         </div>
         <form className={s.formContainer} onSubmit={(e) => handleSubmit(e)}>
            <div>
               <div className={s.labelInput}>
                  <label>Nombre:</label>
                  <input value={input.name} type="text" name="name" onChange={(e) => handleInput(e)} />
               </div>
               <div className={s.labelInput}>
                  <label>E-Mail:</label>
                  <input value={input.email} type="text" name="email" onChange={(e) => handleInput(e)} />
               </div>
               <div className={s.labelInput}>
                  <label>Mensaje:</label>
                  <textarea value={input.message} name="message" cols={40} rows={6} onChange={(e) => handleInput(e)} />
               </div>
               <div className={s.buttonContainer}>
                  <button type="submit">
                     <div>
                        Enviar
                     </div>
                  </button>
               </div>
            </div>
         </form>
         <div className={s.footerContainer}>
            <div className={s.footerLeft}>
               {errors.name ?
                  <div className={s.infoContainer}>
                     <img src="/icons/error.png" alt="✖" />
                     <p>{errors.name}</p>
                  </div>
                  : success ?
                     <div>
                        <div className={s.infoContainer}>
                           <img src="/icons/smiley.ico" alt="✔" />
                           <p>{success}</p>
                        </div>
                     </div>
                     : ""}
            </div>
            <div className={s.footerRight}></div>
         </div>
      </div>
   )
}

export default Contact