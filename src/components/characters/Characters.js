import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./Characters.css";
import {addCharacters} from "../../actions";
import {getCharacterDetails} from "../../actions";
import {connect} from "react-redux";

function Characters(props) {
  
  //const [characters, setCharacters] = useState();
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  
  /*
    PISTA:
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
  */

   
 useEffect(() =>{
  
    //aca recibe como argumento lo que recibe la accion
    props.addCharacters(query)
    setIsLoading(false)
    
    },[query])
     
      
    
    
      //a medida escribo va aparecinedo el resultado (e.target.value)
    const handleChange = (q) => {
      setQuery(q)
    }

    //Aca no se usa pero podria poner otro input de tipo submit e indicarle que hacer
    //aca simplemente evito que se recarge la pagina al tocar enter 
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
        {/*El loading le va a dar un efecto de carga hasta que la peticion de la API llegue, no tocar!.*/}
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


//Actions
function mapDispatchToProps(dispatch) {
  return {
    addCharacters:(query)  => dispatch(addCharacters(query))
    //es indiferente el nombre del argumento
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Characters);
          
