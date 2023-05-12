import SearchBar from "./SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";



export default function Nav(props){
return(
    <div>
        <SearchBar onSearch={props.prop} />
        <button>
            <Link to="/home">home</Link>
        </button>
        <button>
            <Link to="/about">about</Link>
        </button>
        <button>
            <Link to="/Favorites">favoritos</Link>
        </button>
    </div>
)

}