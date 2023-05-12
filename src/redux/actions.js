import { ADD_FAV, REMOVE_FAV , FILTER, ORDER} from "./actions-type";

export const addfav= (caracter)=>{ return{ 
  type: ADD_FAV,
  payload: caracter
}};

export const removefav= (id)=>{return{
    type: REMOVE_FAV,
    payload: id
}};

export const filterCards= (gend)=>{ return{ 
  type: FILTER,
  payload: gend
}};

export const orderCards= (ord)=>{return{
    type: ORDER,
    payload: ord
}};
