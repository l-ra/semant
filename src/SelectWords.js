import React from 'react'
import { connect } from "react-redux"
import { Button, Row, Col } from 'reactstrap'
import { nextHeaderWord , selectWord, deselectWord } from './actions'

const mapStateToProps = (state) => {
    let { toSelectWords, selectedWords, headerWords, currentHeaderWordIndex } = state
    return {
        toSelectWords,
        selectedWords,
        headerWords,
        currentHeaderWordIndex
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onNextHeaderWord: () => dispatch(nextHeaderWord()),
        selectWord: (word) => dispatch(selectWord(word)),
        deselectWord: (word) => dispatch(deselectWord(word))
    }
}


const ConnectedSelectWords = ({ toSelectWords, selectedWords, headerWords, currentHeaderWordIndex, onNextHeaderWord, selectWord, deselectWord }) => (
    <div>
        <h1>
            <Button outline  style={{margin: '10px'}}>&lt;&lt;Předchozí&lt;&lt;</Button>
            {headerWords ? headerWords[currentHeaderWordIndex] : null}
            <Button outline style={{margin: '10px'}}>&gt;&gt;Další&gt;&gt;</Button></h1>
        <hr />
        <Row>
            <Col>
                <h3>K dispozici</h3>
                {
                    toSelectWords.map((v, i, a) => (
                        <Button style={{margin: '10px'}} key={i} onClick={()=>{selectWord(v)}}>{v}</Button>
                    ))
                }
            </Col>
            <Col>
                <h3>Vybraná</h3>
                {
                    selectedWords.map((v, i, a) => (
                        <Button style={{margin: '10px'}} key={i} onClick={()=>{deselectWord(v)}}>{v}</Button>
                    ))
                }

            </Col>
        </Row>
    </div>
)

const SelectWords = connect(mapStateToProps, mapDispatchToProps)(ConnectedSelectWords)

export default SelectWords
