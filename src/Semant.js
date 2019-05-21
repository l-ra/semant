import React from 'react';
import { Container } from 'reactstrap'
import './Semant.css';
import Header from './Header'
import InfoForm from './InfoForm';
import SelectWords from './SelectWords'

function Semant() {
  return (
    <Container className="Semant">
      <h1>Sémant</h1>
      <Header/>
      <hr />
      <InfoForm/>
      <hr/>
      <SelectWords/>
    </Container>
  );
}


export default Semant;
