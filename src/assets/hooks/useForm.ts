import { useState } from "react"
import emailjs from '@emailjs/browser';

type InitialState = {
    name: string
    email: string
    message: string
    [index: string]: string
}

const useForm = (InitialState: InitialState) => {
    const [errors, setErrors] = useState({
        name: ""
    })
    const [input, setInput] = useState<InitialState>(InitialState)
    const [success, setSuccess] = useState<string>("")
    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    const validation = async (input: InitialState) => {
        let errors = {
            name: ""
        }

        if (!input.name || !input.email || !input.message) errors.name = "Algun campo es requerido"
        else if (input.name.length > 100 || input.email.length > 100) errors.name = "Nombre o email contienen mas de 100 caracteres"
        else if (!input.email.match(emailregex)) errors.name = "Email invalido"

        return errors
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validated = await validation(input)
        if (validated.name.length > 0) setErrors(validated)
        else {
            setErrors({name: ""})
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID, 
                import.meta.env.VITE_TEMPLATE_ID, 
                input, 
                import.meta.env.VITE_PUBLIC_KEY
            )
            setInput(InitialState)
            setSuccess("Mensaje enviado con exito")
            setTimeout(() => {
                setSuccess("")
            }, 10000);
        }
    }

    return {
        errors,
        input,
        success,
        handleInput,
        handleSubmit
    }
}

export default useForm