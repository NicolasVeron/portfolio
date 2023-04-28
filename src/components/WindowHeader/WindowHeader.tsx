import s from "./WindowHeader.module.css"

type Props = {
   icon: string,
   title: string,
   cross?: boolean,
   crossAction?: () => void
}

const WindowHeader = ({icon, title, cross, crossAction}: Props) => {
   return (
      <header className={s.header}>
         <div>
            <img src={icon} alt={icon} loading="lazy"/>
            <h5>{title}</h5>
         </div>
         {cross && crossAction &&
            <button onClick={() => crossAction()}>{"×"}</button>
         }
      </header>
   )
}

export default WindowHeader