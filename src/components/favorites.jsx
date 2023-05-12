import { useDispatch,useSelector } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";
import Card from "./Card/Card";
import { useState } from "react";

 export default function Favorites ({onClose}){

    
    //const allCharacters= useSelector((state)=> state.allCharacters)
    const myFavorites= useSelector((state)=> state.myFavorites)
    //const Characters= !aux? allCharacters: myFavorites;

    const dispatch= useDispatch();
    
    function handleOrder(event){
        dispatch(orderCards(event.target.value))

        console.log(event.target.value)
    }

    function handleFilter(event){
        dispatch(filterCards(event.target.value))
    }


return(console.log(myFavorites),
    <div>
        
      <div>
        <select onChange={handleOrder} >
            <option  value="A">Ascendente</option> 
            <option  value="D">Decreciente</option>
        </select>
        <select onChange={handleFilter}>
            <option  value="Male">Male</option> 
            <option  value="Female">Female</option>
            <option  value="Genderless">Genderless</option> 
            <option  value="unknown">Unknown</option>
        </select>
        </div>  
 
  <div>
    {myFavorites?.map((element) => {
         return (
            <Card 
            key={element.id}
            id= {element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={onClose}
         />
            )
      })}
    </div>
    </div>
)}


/*const mapStateToProps= (state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)*/


