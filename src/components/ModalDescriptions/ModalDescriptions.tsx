import React from 'react'

type DescriptionsProps = {
   id: number | undefined
}

const ModalDescriptions = ({ id }: DescriptionsProps) => {

   switch (id) {
      case 1:
         return (
            <div>
               <img src="https://res.cloudinary.com/dayt0wtlk/image/upload/v1673557982/PKMN_LP_ipip9t.png" loading='lazy'/>
               
               <h2>Descripción</h2>
               <p>Proyecto que toma a prueba todos los conocimientos obtenidos en el bootcamp de programacion Henry.</p>
               <p>Desde el backend se realizan peticiones a travez de una api extensa de Pokemon, realizando busquedas individuales o enteras.</p>
               <p>Desde el front se toma foco principal en el manejo del estado con los filtros y ordenamientos a travez de React y Redux, asi como tambien estilos usando CSS puro.</p>
               <p>Cuenta tambien con un formulario para crear tu propio pokemon (O mas bien capturarlo) validado con Javascript.</p>
               <br />

               <h2>Tecnologías</h2>
               <p>FrontEnd: ReactJS | Redux | CSS | JavaScript</p>
               <p>BackEnd: NodeJS | ExpressJS | JavaScript</p>
               <p>Database: Postgres | Sequelize</p>
               <br />
               
               <img src="https://res.cloudinary.com/dayt0wtlk/image/upload/v1672933852/PKMN_Home_prgz4u.png" loading='lazy'/>
               <img src="https://res.cloudinary.com/dayt0wtlk/image/upload/v1673557990/PKMN_Details_hyi0rc.png" loading='lazy'/>
               <img src="https://res.cloudinary.com/dayt0wtlk/image/upload/v1672933932/PKMN_Form_d40ufn.png" loading='lazy'/>
            </div>
         )
      case 2:
         return (
            <div>
               <img src="https://res.cloudinary.com/dayt0wtlk/image/upload/v1673559024/FCLogo1600_wv2qch.png" loading='lazy'/>
               <h2>Descripción</h2>
               <p>🔹Este proyecto fue creado en Soy Henry's Bootcamp</p>
               <p>🔹LA idea fue desarrollar un SPA ( Single Page Application ) usando React para el frontend y Redux para manejar los estados.</p>
               <p>🔹El diseño de los componentes fue hecho con Material UI y CSS.</p>
               <p>🔹El servidor fue creado utilizando Node.js, Express y MongoDB para la base de datos. A su vez se utilizó Mongoose como ORM.</p>
               <br />

               <h2>Tecnologías</h2>
               <p>🔹 FrontEnd: React.js | Redux.js | CSS | TypeScript</p>
               <p>🔹 BackEnd: Node.js | Express.js | JavaScript</p>
               <p>🔹 Database: MongoDB | Mongoose</p>
               <br />

               <img src="https://user-images.githubusercontent.com/86984789/210461878-bae35ca0-e423-4ba5-8b86-cc339ad80549.png" alt="" loading='lazy'/>
               <img src="https://user-images.githubusercontent.com/86984789/210461959-5c9554fc-a9f8-466c-9cdd-1d180217b4d4.png" alt="" loading='lazy'/>
               <img src="https://user-images.githubusercontent.com/86984789/210462100-96faa819-0430-481c-8ac5-a36ffaf4dd1f.png" alt="" loading='lazy'/>
               <img src="https://user-images.githubusercontent.com/86984789/210462186-bfb916f6-3112-46fc-abcd-517310def658.png" alt="" loading='lazy'/>
               <img src="https://user-images.githubusercontent.com/86984789/210463260-5d8b69dc-b277-4eb5-9cdc-b1d315111fda.png" alt="" loading='lazy'/>
               <img src="https://user-images.githubusercontent.com/86984789/210463268-9ec639b4-2e05-4073-a2aa-7f6557260b46.png" alt="" loading='lazy'/>
               <img src="https://user-images.githubusercontent.com/86984789/210463278-3b43aa21-7dee-4bc4-9e94-d427c575b553.png" alt="" loading='lazy'/>
            </div>
         )
      default:
         return (
            <div>loading</div>
         )
   }
}

export default ModalDescriptions