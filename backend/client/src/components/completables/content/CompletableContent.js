import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import { Button, Col, Row, Container } from 'react-bootstrap'
import CompletableNodes from './CompletableNodes'
import CompletableContentBlocks from './CompletableContentBlocks'

class CompletableContent extends Component {

  handleOnClick = () => {
    const allC = this.props.allCompletables.find(c => c.id === this.props.completable.id)
    this.props.toggleCompletable(allC)
  }

  render(){
    return(
      <Accordion.Collapse eventKey={this.props.completable.id}>
        <Card.Body>
          <Container fluid>
            {!!this.props.completable.nodes && <CompletableNodes nodes={this.props.completable.nodes} allCompletables={this.props.allCompletables} toggleCompletable={this.props.toggleCompletable}/>}
            {!!this.props.completable.content_blocks && <CompletableContentBlocks contentBlocks={this.props.completable.content_blocks}/>}
            <Row className="bottom-row">
              <Col xs={12} sm={8} md={9}></Col>
              <Col>
                <Button variant="primary" onClick={this.handleOnClick} block>Complete</Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    )
  }
}

export default CompletableContent