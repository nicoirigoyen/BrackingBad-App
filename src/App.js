import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import CharacterDetail from './components/characterDetails/CharacterDetail';
import Characters from './components/characters/Characters';
import Home from './components/home/Home';
import Episodes from './components/episodes/Episodes';
import NavBar from './components/navbar/NavBar'

function App() {
  return (  
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/" component={NavBar} />
        <Route path="/characters" component={Characters}/>
        <Route path="/character/:id" component={CharacterDetail} />
        <Route path="/episodes" component={Episodes} />   
    </BrowserRouter>  
  )
}
export default App;
