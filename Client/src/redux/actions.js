import { ADD_FAV, REMOVE_FAV , FILTER, ORDER} from "./actions-type";

/* export const addfav= (caracter)=>{ return{ 
  type: ADD_FAV,
  payload: caracter
}};
*hecho antes del back-end
export const removefav= (id)=>{return{
    type: REMOVE_FAV,
    payload: id
}};*/
import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const {data}= await axios.post(endpoint, character)
          return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      } catch (error) {
         console.log(error.message)
      }
   };
};

// ACTION | removeFav
export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
   try {
           const {data} = await axios.delete(endpoint)
        return dispatch({
           type: 'REMOVE_FAV',
           payload: data,
     });

   } catch (error) {
      console.log(error.message)
   }

  };
};

export const filterCards= (gend)=>{ return{ 
  type: FILTER,
  payload: gend
}};

export const orderCards= (ord)=>{return{
    type: ORDER,
    payload: ord
}};
