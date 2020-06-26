import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import { Button, Col, Row, Container } from 'react-bootstrap'

class CompletableContent extends Component {
  render(){
    return(
      <Accordion.Collapse eventKey={this.props.completable.id}>
        <Card.Body>
          <Container fluid>
            <Row className="bottom-row">
              <Col xs={12} sm={8} md={9}></Col>
              <Col>
                <Button variant="primary" onClick={() => console.log('butt')} block>Complete</Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    )
  }
}

export default CompletableContent