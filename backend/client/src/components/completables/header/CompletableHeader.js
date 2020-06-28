import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CompletableTitle from './CompletableTitle'
import CompletableCompleteStatus from './CompletableCompleteStatus'


class CompletableHeader extends Component {
  render(){
    return(
      <Accordion.Toggle as={Card.Header} eventKey={this.props.completable.id} className="text-primary">
          <Container fluid>
            <Row>
              <Col xs={0.5}>
                <CompletableCompleteStatus completable={this.props.completable} allCompletables={this.props.allCompletables}/>
              </Col>
              <Col>
                {!!this.props.completable && <CompletableTitle completable={this.props.completable}/>}
              </Col>
            </Row>
          </Container>
      </Accordion.Toggle>
    )
  }
}

export default CompletableHeader