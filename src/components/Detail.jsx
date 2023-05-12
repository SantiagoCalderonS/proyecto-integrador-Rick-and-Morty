import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Detail.module.css"


export default function Detail(){//para mi version fallida le pasaba por parametro characters desde app {characters}

    /*let {id}= useParams();
    const [character, setcharacter]= useState({})
                                                                           //mi version
    id= id.split(":")[1];                                             //cuando se va a detalles desde la sesion favoritos, si en home (osea en characters)
    const [charact]= characters.filter(char=> `${char.id}` === id);   // no esta el personaje o fue borrado de ahí, no se mostrara info del personaje
   
    console.log(character)


    useEffect(() => {
    setcharacter({...charact})}, []);*/

    let {id} = useParams();
    id= id.split(":")[1];
    const [character, setCharacter] = useState([]);
console.log(character)
    useEffect(() => {                                                                 //aqui como se toma el personaje asincronicamente desde al api, no es necesario que el personaje en characters del home
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {               
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);
       
    return(
        <div className={style.Detalles}>
            <img src={character.image} alt='' />
            <h2>nombre:{character.name}</h2>
          <h2>estatus:{character.status}</h2>
          <h2>especie:{character.species}</h2>
          <h2>genero:{character.gender}</h2>
          <h2>origen:{character.origin?.name}</h2>
        </div>
    )
}