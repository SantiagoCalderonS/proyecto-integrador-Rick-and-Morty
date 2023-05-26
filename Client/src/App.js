import main from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from "./components/about.jsx"
import Detail from "./components/Detail.jsx"
import Form from './components/Form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from "./components/favorites";




function App() {
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'noob_master69@hotmail.com';
   const PASSWORD = 'fortnite1';
   const [characters, setCharacters ]= useState([]);
   

   async function login(userData) {
      try {
         const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
      const {data}= await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      
         if (access){
            setAccess(data);
            access && navigate('/home');
         }else{
            throw Error("email y contraseña erroneas")
         }
      } catch (error) {
         window.alert(error.message)
      }
   }

   /*function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   });
}*/

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const ubi= useLocation().pathname
   
   /*function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }*/
   async function onSearch(id) {
      try {      
            //response.data
         const response = (await axios(`http://localhost:3001/rickandmorty/character/${id}`)).data
         setCharacters((oldChars) => [...oldChars, response]);
         /*if (response.name) {
            setCharacters((oldChars) => [...oldChars, response]);
         } else {
            throw new Error()
         }*/
      } catch (error) {
         window.alert("¡No hay personajes con este ID!");
      }
   }

   const onClose = (id)=>{
      setCharacters(prev=>  prev.filter(elem=> elem.id !== id))
   }

   return (
   <div className={main.App}>
      { ubi !== "/" && (<div>
         <Nav prop={onSearch}/>
      </div>)}
      <Routes>
       <Route path='/'  element={<Form login={login}/>}/>
       <Route path='/home'  element={<Cards characters={characters} onClose={onClose}/>}/>
       <Route path='/about'  element={<About/>}/>
       <Route path='/Detail/:id'  element={<Detail characters={characters}/>}/>
       <Route path='/Favorites' element={<Favorites onClose={onClose}/>}/>
      </Routes>
      </div>
   );
}

export default App;
