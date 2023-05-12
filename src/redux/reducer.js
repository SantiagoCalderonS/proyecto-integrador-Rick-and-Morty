import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type";

const initialState= {
myFavorites: [],
allCharacters:[]
}

export function reducer (state= initialState, actions){
    switch (actions.type){
        case ADD_FAV: return{
            ...state,
            myFavorites: [...state.myFavorites, actions.payload],
            allCharacters:[...state.myFavorites, actions.payload]
        }

        case REMOVE_FAV: return {...state,
        myFavorites: state.myFavorites.filter(fav=> `${fav.id}` !== `${actions.payload}` ),
        allCharacters: state.allCharacters.filter(fav=> `${fav.id}` !== `${actions.payload}` )

        }

        case FILTER: return{
            ...state,
            myFavorites: state.allCharacters.filter(fav=> fav.gender === actions.payload )
        }

        case ORDER:
      const allCharactersCopy = [...state.allCharacters];
      if (actions.payload === "A") {
        allCharactersCopy.sort((a, b) => a.id - b.id);
      } else if (actions.payload === "D") {
        allCharactersCopy.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: allCharactersCopy/*.filter((char) =>
          state.myFavorites.some((fav) => fav.id === char.id)
        ),*/
      };
        /*case ORDER: return actions.payload==="A"?{
            ...state,
            myFavorites: state.allCharacters.sort((a,b)=> a.id - b.id)
        }:actions.payload === "D"?{
            ...state,
            myFavorites: state.allCharacters.sort((a,b)=> b.id - a.id)}:""*/

        default: return {...state};
       
    }
}
