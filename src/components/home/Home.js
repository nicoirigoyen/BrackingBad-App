import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";
import {addQuote} from "../../actions";
import {connect} from "react-redux";
/*import las acciones y el connect para conectar toda la app*/


function Home(props) {
 
  useEffect(()=>{
    props.addQuote();
  },[])
 

 

  return (
    <div className="Home">
      
      <img src={logo} alt="" className="Home__logo" />

      <div>
        <h3>{props.quote.quote}</h3>
        <p>{props.quote.author}</p>
        <p>{props.quote.series}</p>
      </div>
      
    </div>
  );

};
//Devolviendo un objeto, cuyo parámetro quote va a ser igual al quote del estado global
//Con connect ese objeto devuelto pasa a formar parte de las props

function mapStateToProps(state){
  return {
    quote : state.quote
  }
}


//Actions
function mapDispatchToProps(dispatch) {
  return {
    addQuote: () => dispatch(addQuote())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Home);
          



