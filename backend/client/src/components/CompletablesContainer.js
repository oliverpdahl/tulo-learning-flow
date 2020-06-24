import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

class CompletablesContainer extends Component {
  listCompletables = () => {
    return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
      {this.props.completables.map(completable => completable.title)}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body></Card.Body>
      </Accordion.Collapse>
    </Card>
    )
  }
  render(){
    return(
    <Accordion defaultActiveKey="0">
      {this.listCompletables()}
    </Accordion>
    )
  }
}

export default CompletablesContainer