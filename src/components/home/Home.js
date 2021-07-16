import React, { useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";
import {addQuote} from "../../actions";
import {connect} from "react-redux";

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

function mapStateToProps(state){
  return {
    quote : state.quote
  }
}



function mapDispatchToProps(dispatch) {
  return {
    addQuote: () => dispatch(addQuote())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Home);
          



