import { useState } from "react"
import emailjs from '@emailjs/browser';

type InitialState = {
    name: string
    email: string
    message: string
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

        const res = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=c9ab08d7f7454894a79375736420bc4a&email=${input.email}`)
        const data = await res.json()

        if (!input.name || !input.email || !input.message) errors.name = "Algun campo es requerido"
        else if (input.name.length > 100 || input.email.length > 100) errors.name = "Nombre o email contienen mas de 100 caracteres"
        else if (!input.email.match(emailregex)) errors.name = "Email invalido"
        else if (data.deliverability !== "DELIVERABLE") errors.name = "Email n̷̨̛̹̯͎̺͍̠̦̺̲̼͍̹̭͉͒̓͒̈ǫ̷̩̳͎̠͈̰̘̟̦̯̮̜͒͆͌͗̆̓͆͝ͅ ̷̧̳̙̩̫̪̦̳̣̗͈̱͓̫͔̂́̃̅̑̄͋͘ḙ̴̢̝͇̬̠̙̠̳̞͕̅x̵̤̙̄̾̾i̷̖̱̺̪͓͉̠͕̰̳͗͑͜s̵͎̩͇̙̯̺̖͇̖̜̞̟̬͂͑͜͜t̸̩̹̰̼̹̏̐͜͜ẹ̷̡̡̘̠̟̅͝ͅņ̸̡̹͉̮͚̩͚̜̾̀̐͋̇̊͆̚͝ẗ̷̨̡̙̪͍̺̺̘̣̐́̈́͜ȇ̸̡̢̧̛̜̫̮̱̱͙̦̱͈̭̅͂͊̌̎̑̿̏͆͒̏̉̚ͅ"

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
            //await emailjs.sendForm(
            //    import.meta.env.VITE_SERVICE_ID, 
            //    import.meta.env.VITE_TEMPLATE_ID, 
            //    e.target, 
            //    import.meta.env.VITE_PUBLIC_KEY
            //)
            setErrors({name: ""})
            await emailjs.send("service_5tiq3vl","template_0pmzxvh", input, "vnap6grHJcb-IalvP");
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