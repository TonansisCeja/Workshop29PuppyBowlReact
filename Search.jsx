import { SearchBar } from "./SearchBar";
import { useState } from "react";
import { SearchResultsList } from "./SearchResultsList";
import "../App.css";

function Search () {
    const[results, setResults]= useState([]);
    return (
        
            <div className="Search">
                <div className="search-bar-container">
                  <SearchBar/>  
                  <SearchResultsList results={results}/>
                </div>
                
            </div>
        
    );
}

export default Search;