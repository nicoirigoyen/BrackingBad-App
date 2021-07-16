import {addquote} from "../actions";
import {addcharacters} from "../actions";
import {addepisodes} from "../actions";
import {charactersdetails} from '../actions';


//==== Setear Estado Global Inicial ======//

const initialState = {
    quote : {},
    episodes : {},
    characters: [],
    characterdetail: {} 
}

//==== Setear Reducers ======//
function rootReducer(state = initialState, action){

    switch(action.type){
        case addquote:
            return {...state, 
                quote: action.payload} 

        case addcharacters:
            return{...state,
            characters:  action.payload}
        
        case addepisodes:
            return{...state,
                episodes:  action.payload}
                
               
        case charactersdetails:
            return{...state,
                characterdetail:  action.payload}
            
                  
        
        default:
                return state;





    }







   
}




export default rootReducer;