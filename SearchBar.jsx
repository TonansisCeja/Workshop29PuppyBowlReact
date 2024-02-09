import React, {useState} from "react"



export const SearchBar = ({setResults}) => {
      const [input, setInput]=useState("");

      const fetchData= (value) =>{
      fetch('http://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-b/players')
           .then((response)=> response.json())
           .then((json) => {
               const results = json.filter((user)=>{
                      return (
                      value &&
                      user && 
                      players.name && 
                      players.name.toLowerCase().includes(value)
                   );
               });
              setResults(results);
            });
 };

 const handleChange = (value) => {
  setInput(value);
  fetchData(value);

 };
    return (
    <div className="input-wrapper">
  
    <input placeholder="Type to search..." 
           value={input} 
           onChange={(e) => handleChange(e.target.value)}/>"

    </div>
  ) 
};