import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'
import CompletableTitle from './CompletableTitle'


class CompletableHeader extends Component {
  isComplete = (completable) => {
    return this.props.allCompletables.find(c => c.id === completable.id).complete
  }
  render(){
    return(
      <Accordion.Toggle as={Card.Header} eventKey={this.props.completable.id} className="text-primary">
          <Container fluid>
            <Row>
              <Col xs={0.5}>
                {this.isComplete(this.props.completable) ? <FontAwesomeIcon icon={fasCircle} /> : <FontAwesomeIcon icon={farCircle} />}
              </Col>
              <Col xs={7}>
                <CompletableTitle completable={this.props.completable}/>
              </Col>
            </Row>
          </Container>
      </Accordion.Toggle>
    )
  }
}

export default CompletableHeader