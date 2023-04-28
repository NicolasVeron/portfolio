import useForm from '../../assets/hooks/useForm'
import { WindowHeader } from '..'
import { icons, formInput } from '../../assets/constants'
import s from "./ContactForm.module.css"
import "../../App.css"

const ContactForm = () => {

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
      <div className={`${s.container} w95-layout`}>
         <WindowHeader
            icon={icons.letter}
            title="Contacto"
         />
         <form className={s.formContainer} onSubmit={(e) => handleSubmit(e)}>
            {formInput.map(i =>
               <div className={s.labelInput} key={i.name}>
                  <label>{i.label}</label>
                  {
                     i.textarea ?
                        <textarea value={input[i.name]} name={i.name} cols={40} rows={6} onChange={(e) => handleInput(e)} className="w95-under" />
                        : <input value={input[i.name]} type="text" name={i.name} onChange={(e) => handleInput(e)} className="w95-under" />
                  }
               </div>
            )}
            <div className={s.buttonContainer}>
               <button type="submit" className='w95-button'>
                  <div>Enviar</div>
               </button>
            </div>
         </form>
         <footer className={s.footerContainer}>
            <div className={`${s.footerLeft} w95-under`}>
               {errors.name ?
                  <div className={s.infoContainer}>
                     <img src={icons.error} alt="✖" />
                     <p>{errors.name}</p>
                  </div>
                  : success ?
                     <div>
                        <div className={s.infoContainer}>
                           <img src={icons.smile} alt="✔" />
                           <p>{success}</p>
                        </div>
                     </div>
                     : ""}
            </div>
            <div className={`${s.footerRight} w95-under`} />
         </footer>
      </div>
   )
}

export default ContactForm