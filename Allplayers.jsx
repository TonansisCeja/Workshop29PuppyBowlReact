import {useEffect} from "react"
import {useState} from "react"

export default function Allplayers(){

    const [players,setPlayers]= useState([]);
    useEffect(()=>{
        async function fetchPlayers()
        {
            try{
                //fetch data from server assign results in players then show result in console
                const response = await fetch
                 ('http://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-b/players');
                 const result=await response.json();
                 setPlayers(result.data.players);
                  
            }
            catch(error)
            {
                console.error(error);
            }
        }
        fetchPlayers();
        
       
    },[]);
  
console.log(players);

return(
    <>

       {players.map((player) => {

                           
                            return(
                                <div key={player.id} >
                                   <h1> {player.name}</h1>
                                   <button >  Details</button>
                                   </div>
                                  )
                               
                               }
                    )
        }

       </>
)
}

