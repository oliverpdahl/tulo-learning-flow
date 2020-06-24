import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

class CompletableContent extends Component {
  render(){
    return(
      <Accordion.Collapse eventKey="0">
        <Card.Body></Card.Body>
      </Accordion.Collapse>
    )
  }
}

export default CompletableContent 