import { useState } from "react";
import Validaciones from "./validaciones"

export default function Form({login}){

const [userData, setuser]= useState({ // aqui se guarda la info
email:"",
password:""
})


const [error, seterror]= useState({
    err:"",
    lugar:""
})
/*event es el evento que llama la funtion, target es elemento en donde pasa el evento (en este caso el input)
 y el value es un atributo/propiedad del elemento que guarda el valor de lo que se escribe en este*/
function handlechange (event){
    const valor = event.target.value;
    const apartado= event.target.name;
    console.log(apartado);
    seterror({...error,
        err: Validaciones(valor, apartado),
        lugar: apartado
    })

    setuser({...userData , /*el ... state, es para*/
        [apartado]:valor
      })    
}


function handleSubmit(e){  {/* solo va con el boton submit */}
    e.preventDefault();
    login(userData)
}

return(<div>
    <form >
    <label>usuario</label>                                {/*se bindea el valor de stado con el del input value para evitar alteraciones externas*/}
    <input name= "email" onChange={handlechange} value={userData.email}/> {/*en onchange cuando el input cambie se estara invocando a la callback handlechange*/ }
    {error.err!==null&&error.lugar==="email"?<h6>{error.err}</h6>:""}
    <br/>                                                                 {/*se iguala el value por el ---- para ----*/}   
    <label>constraseña</label>
    <input name= "password" onChange={handlechange} value={userData.password}/>
    {error.err!==null&&error.lugar==="password"?<h6>{error.err}</h6>:""}
    < button  onClick={handleSubmit} type="submit">submit</button> {/*averiguar donde poner el: onClick= handlerSubmit*/}
    </form>
    </div>

)



}