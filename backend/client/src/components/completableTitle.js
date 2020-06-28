import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'


class CompletableTitle extends Component {
  // isComplete = () => {
  //   completable = 
  // }
  render(){
    return(
      <Accordion.Toggle as={Card.Header} eventKey={this.props.completable.id} className="text-primary">
          <Container fluid>
            <Row>
              <Col xs={0.5}>
                {this.props.completable.complete ? <FontAwesomeIcon icon={fasCircle} /> : <FontAwesomeIcon icon={farCircle} />}
              </Col>
              <Col xs={7}>
                {this.props.completable.title}
              </Col>
            </Row>
          </Container>
      </Accordion.Toggle>
    )
  }
}

export default CompletableTitle