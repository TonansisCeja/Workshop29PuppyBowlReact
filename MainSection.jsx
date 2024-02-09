
import Home from './Home.jsx';
import Allplayers from './Allplayers.jsx';
import NewPlayerForm from './NewPlayerForm.jsx';
import Search from './Search.jsx';
import { Routes, Route, Link } from "react-router-dom";


export default function MainSection(){
    return(
        
                <div id="main-section">
                   <Routes>
                         
                         <Route path="/Allplayers" element={<Allplayers/>}/>
                         <Route path="/NewPlayerForm" element={<NewPlayerForm/>} />
                         <Route path="/Search" element={<Search/>} />
                         <Route path="/" element={<Home/>} />
                         
                    </Routes>
                </div>
      
        
        )
    } 