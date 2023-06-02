import uno from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";


export default function Card(props){

//const allCharacters= useSelector((state)=> state.allCharacters)
const myFavorites= useSelector((state)=>state.myFavorites)

const dispatch= useDispatch() 

const [isFav, setIsFav]= useState(false);

const handleFavorite= ()=> {
   /*switch (isFav){
      case true: setIsFav(false);
      dispatch(removefav(props.id));
      case false: //setIsFav(true);
      !(myFavorites.includes(props)) && dispatch(addfav(props))
   }*/
   switch (isFav){
      case true:
      dispatch(removeFav(props.id));
      break
      case false:
      !(myFavorites.includes(props)) && dispatch(addFav(props));
      break
   }; setIsFav(!isFav)
   /*isFav? removefav(props.id):
   addfav(props);
   setIsFav(!isFav)*/
}

useEffect(() => {
   myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

    return (
       <div className={uno.Class}>
         <Link to={`/Detail/:${props.id}`} ><img src={props.image} alt='' /></Link>
         
         { isFav? (<button onClick={handleFavorite}>❤️</button>)
         :(<button onClick={handleFavorite}>🤍</button>)}

          <h2>nombre:{props.name}</h2>
          <h2>estatus:{props.status}</h2>
          <h2>especie:{props.species}</h2>
          <h2>genero:{props.gender}</h2>
          <h2>origen:{props.origin}</h2>
          <button onClick={()=>props.onClose(props.id)}>X</button>
       </div>
    );
 }

/* const mapDispatchToProps=(dispatch)=>{
   return{
      addfav: (caracter)=> dispatch(addfav(caracter)),
      removefav: (id)=>dispatch(removefav(id))
   }
 }

 const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites
   }
 }*/

 //export default Card;//connect( mapStateToProps,mapDispatchToProps)(Card);