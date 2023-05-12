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
   
   function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const ubi= useLocation().pathname
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
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
