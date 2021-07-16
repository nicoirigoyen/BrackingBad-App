export const addquote = "ADD_QUOTE";
export const addcharacters = "ADD_CHARACTERS";
export const charactersdetails = "CHARACTERS_DETAILS";
export const addepisodes = "ADD_EPISODES";


export function addQuote() {
    return function(dispatch) {
        return fetch('https://www.breakingbadapi.com/api/quote/random')
        .then(res => res.json())
        .then(json => {
            dispatch({type:"ADD_QUOTE", payload: json[0]})})
        //.catch(error=>console.log(error));   
        
    }
}
export function addCharacters(query) {
    return function(dispatch) {
        return fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        .then(res => res.json())
        .then(json => {
            dispatch({type:"ADD_CHARACTERS", payload:json})
        })
    }
}

export function getCharacterDetails(id){
    return function(dispatch) {
        return fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch({type:"CHARACTERS_DETAILS", payload: json[0]})
        })
    }
}

export function addEpisodes() {
    return function(dispatch) {
        return fetch(`https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`)
        .then(res => res.json())
        .then(json => {
            dispatch({type:"ADD_EPISODES", payload: json})
        })
    }
}