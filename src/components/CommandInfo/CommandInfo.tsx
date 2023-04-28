import { useState } from 'react'
import { Win95Modal } from '..'
import { commandPrompt, skills } from '../../assets/constants'
import s from "./CommandInfo.module.css"
import "../../App.css"

const CommandInfo = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={`${s.commandTool} w95-under`}>
            {commandPrompt.map(e => 
                <>
                    <p>{e.input}</p>
                    <p>{e.return}</p>
                </>
                )}
            <p>{'C:/Users/NicolasV> resume'}</p>
            <a onClick={() => setOpen(true)}>{'Resume.pdf'}</a>
            <p>{'C:/Users/NicolasV> skills'}</p>
            <p>
                {skills.map((e, i) =>
                    <span style={{ color: e.color }} key={i}>
                        {i ? <span style={{ color: 'white' }}>{", "}</span> : ""}
                        {e.name}
                    </span>
                )}
            </p>
            <p className={s.prompt}>{'C:/Users/NicolasV> '}</p>
            {open && <Win95Modal setOpen={setOpen} />}
        </div>
    )
}

export default CommandInfo