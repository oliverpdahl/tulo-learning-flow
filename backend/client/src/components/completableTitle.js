import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

class CompletableTitle extends Component {
  render(){
    return(
      <Accordion.Toggle as={Card.Header} eventKey="0" className="text-left">
        {this.props.completable.title}
      </Accordion.Toggle>
    )
  }
}

export default CompletableTitle