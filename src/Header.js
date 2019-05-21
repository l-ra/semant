import React from 'react'
import {connect} from "react-redux"

const mapStateToProps= ( state ) => {
    return {
        name: state.name,
        testDate: state.testDate,
        birthDate: state.birthDate,
        remainingHeaderWordsCount: state.remainingHeaderWordsCount,
        remainingWordToSelect: state.remainingWordToSelect,
        state: state.state,
    }
}

const ConnectedHeader = ({name,testDate,birthDate,remainingHeaderWordsCount,remainingWordToSelect, state})=>(
    <div>
        {name} narozen(a) dne {birthDate}.{' '}
        Datum testu: {testDate}.{' '}
        Zbývá {remainingHeaderWordsCount} slov.{' '}
        Vyberte ještě {remainingWordToSelect} slov. 
        Stav: {state} 
    </div>
)

const Header = connect(mapStateToProps)(ConnectedHeader)

export default Header
