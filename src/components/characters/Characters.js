import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./Characters.css";
import {addCharacters} from "../../actions";
import {getCharacterDetails} from "../../actions";
import {connect} from "react-redux";

function Characters(props) {
  
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  
   
 useEffect(() =>{
  
    props.addCharacters(query)
    setIsLoading(false)
    
    },[query])
     
      
    
    const handleChange = (q) => {
      setQuery(q)
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      
    }
  
   

    

   
  return (
    
    <div className="Characters">
      <h1>List of Characters</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input
            type= 'text'
            placeholder='Search'
            onChange={((e)=> handleChange(e.target.value))}/>

        </form>
      

      <ul className="Characters__list">
        {isLoading ? (
          <Spinner />
        ) : (
           
          
         
            props.characters && props.characters.map((i) => <li key={i.char_id}>
              <Link to={`character/${i.char_id}`}>
                  {i.name}
              </Link>
            </li> ) 
        )}
      </ul>
    </div>
    
  );

}


function mapStateToProps(state){
  return {
    characters : state.characters
  
  }
}



function mapDispatchToProps(dispatch) {
  return {
    addCharacters:(query)  => dispatch(addCharacters(query))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Characters);
          
