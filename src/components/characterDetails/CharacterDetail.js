import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CharacterDetail.css";
import {connect} from 'react-redux';
import {getCharacterDetails} from "../../actions";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */
   const {id} = useParams();
   useEffect(() =>{
    props.getCharacterDetails(id);
   },[id])
   



  return (
    <div className="CharacterDetail">
      <h1>Character Details</h1>
      
      <h3>{props.charactersdetail.name}</h3>
      <h4>{props.charactersdetail.category}</h4>

      <img className="CharacterDetail__Photo" src={props.charactersdetail.img} alt='' />
   
    </div>
  );
}

function mapStateToProps(state){
  return {
    charactersdetail : state.characterdetail
  
  }
}


//Actions
function mapDispatchToProps(dispatch) {
  return {
    getCharacterDetails:(id)  => dispatch(getCharacterDetails(id))
    //es indiferente el nombre del argumento
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
