import { Routes, Route, Link } from "react-router-dom";


export default function NavBar(){
    return(
        <>
              <div id="container">
             <div id="navbar">

                 <Link to="/">Home</Link>
                 <Link to="/Allplayers">View Players</Link>
                 <Link to="/NewPlayerForm">Create Player</Link>
                 <Link to="/Search">Search</Link>
                
              
            </div>

         
      </div>
        </>
    )
}