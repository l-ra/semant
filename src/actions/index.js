import { SET_CONFIG_DATA, NEXT_HEADER_WORD, SELECT_WORD, DESELECT_WORD } from "../constants/action-types"; 


export function setConfigData(name, birthDate, extraHeaderWords) {
    return { 
        type: SET_CONFIG_DATA, 
        payload: {name, birthDate, extraHeaderWords}
    }
};

export function nextHeaderWord(){
    return {
        type: NEXT_HEADER_WORD
    }
}

export function selectWord(word){
    return {
        type: SELECT_WORD,
        payload: word
    }
}

export function deselectWord(word){
    return {
        type: DESELECT_WORD,
        payload: word
    }
}
