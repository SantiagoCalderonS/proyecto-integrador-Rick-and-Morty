import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setid]= useState("");

   const handleChange= (event)=>{
      setid(event.target.value)
   }


   return (
      <div>
      <input id="s" type='search'  onChange={handleChange} value={id}/>
         <button onClick={() =>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
