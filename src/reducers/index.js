import {SET_CONFIG_DATA, SELECT_WORD, DESELECT_WORD} from '../constants/action-types'
import {ST_ENTER_INFO, ST_COLLECT_WORDS} from '../constants/app-states'

const initialHeaderWords = [
    'Láska',
    'Radost',
    'Agrese',
    'Vášeň',
    'Strach',
    'Vina',
    'Sobectví',
    'Smutek',
    'Bolest',
    'Touha',
    'Nenávist',
    'Konflikt',
    'Nemoc',
    'Trestný čin',
    'Zaměstnání',
    'Manželství',
    'Já',
    'Otec',
    'Matka',
    'Partner',
    'Ideální člověk',
    'Alkohol',
    'Drogy',
    'Nadřízený',
    'Děti',
    'Sex',
    'Sourozenci',
    'Terapeut',
  ]
  
  const initialToSelectWords = [
    'slunce',
    'měsíc',
    'mříž',
    'číše',
    'kříž',
    'loď',
    'člověk',
    'rty',
    'strom',
    'oko',
    'blesk',
    'had',
    'květina',
    'ryba',
    'dům',
    'voda',
  ]
  
  const initialState = {
    state: ST_ENTER_INFO,
    headerWords: null,
    toSelectWords: initialToSelectWords.slice(),
    name: null,
    testDate: "2019-05-01",
    birthDate: null,
    extraHeaderWords: [null,null,null],
    currentHeaderWordIndex: 0,
    remainingHeaderWordsCount: 0,
    currentSelection: [],
    remainingWordToSelect: initialToSelectWords.length/2,
    selectedWords:[],
    selected: {
    }
  }
  
  

function rootReducer(state = initialState, action) {
    console.log("Reducer: ",action)

    if (action.type===SET_CONFIG_DATA){
        let newHeaderWords=initialHeaderWords.concat(action.payload.extraHeaderWords)
        return Object.assign({},state,
                           action.payload,
                           {
                                currentHeaderWordIndex:0,
                                headerWords: newHeaderWords,
                                extraHeaderWords: action.payload.extraHeaderWords.slice(),
                                remainingHeaderWordsCount: newHeaderWords.length, 
                                state: ST_COLLECT_WORDS,
                                selectedWords: [],
                                toSelectWords: initialToSelectWords.slice(),
                            },
               )
    }

    if (action.type===SELECT_WORD) {
        let word = action.payload
        let newToSelectWords = state.toSelectWords.slice()
        newToSelectWords.splice(newToSelectWords.indexOf(word),1)
        return Object.assign({}, state, 
                {
                    selectedWords: state.selectedWords.concat(word),
                    toSelectWords: newToSelectWords,
                }
            )
    }

    if (action.type===DESELECT_WORD) {
        let word = action.payload
        let newSelectedWords = state.selectedWords.slice()
        newSelectedWords.splice(newSelectedWords.indexOf(word),1)
        return Object.assign({}, state, 
                {
                    selectedWords: newSelectedWords,
                    toSelectWords: state.toSelectWords.concat(word),
                }
            )
    }

    return state;
};

export default rootReducer; 