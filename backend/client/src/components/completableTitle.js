import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

class CompletableTitle extends Component {
  render(){
    return(
      <Accordion.Toggle as={Card.Header} eventKey={this.props.completable.id}>
        <Container fluid>
          <Row>
            <Col xs={0.5}>
              <FontAwesomeIcon icon={faCircle} />
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