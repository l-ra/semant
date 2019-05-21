import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux"
import { setConfigData } from './actions';

const mapStateToProps = (state) => {
    return {
        name: state.name,
        testDate: state.testDate,
        birthDate: state.birthDate,
        extraHeaderWords: state.extraHeaderWords,
        remainingHeaderWordsCount: state.remainingHeaderWordsCount,
        remainingWordToSelect: state.remainingWordToSelect
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetConfigData: (name, birthDate, extraHeaderWords )=>dispatch(setConfigData(name,birthDate,extraHeaderWords))
    }
}


class ConnectedInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            birthDate: props.birthDate,
            extraHeaderWords: props.extraHeaderWords,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleIndexedChange(propName,idx,val) {
        let newVal=this.state[propName].slice()
        newVal.splice(idx,1,val)
        this.setState({
            [propName]:  newVal
        })
    }

    handleSubmit(event) {
        this.props.onSetConfigData(this.state.name,this.state.birthDate, this.state.extraHeaderWords);
    }

    render() {
        const { title } = this.state;

        return (
            <Form>
                <FormGroup>
                    <Label for="name">Jméno</Label>
                    <Input type="text" name="name" id="name" placeholder="Jméno Příjmení" onChange={this.handleChange} value={this.state.name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="birthDate">Datum narození</Label>
                    <Input type="date" name="birthDate" id="birthDate" placeholder="datum narození" onChange={this.handleChange} value={this.state.birthDate}/>
                </FormGroup>
                {
                    this.state.extraHeaderWords.map((v,i,a)=>(
                        <FormGroup key={i}>
                            <Label for={`extraHeaderWord-${i}`}>Vlastní slovo č. {i}: </Label>
                            <Input type="text" name={`extraHeaderWord-${i}`} id={`extraHeaderWord-${i}`} 
                                   placeholder="slovo k prověření" value={v}
                                   onChange={(ev)=>{let idx=i; this.handleIndexedChange('extraHeaderWords',idx,ev.currentTarget.value)}}/>
                        </FormGroup>
                    ))               
                }
                <Button onClick={this.handleSubmit}>Nastavit</Button>
            </Form>

        );
    }
}

const InfoForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedInfoForm)


export default InfoForm
