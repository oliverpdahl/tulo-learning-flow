import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import { Button, Col, Row, Container } from 'react-bootstrap'
import ContentBlockContainer from './ContentBlockContainer'
import CompletablesContainer from './CompletablesContainer';

class CompletableContent extends Component {

  handleOnClick = () => {
    this.props.toggleCompletable(this.props.completable)
  }

  render(){
    return(
      <Accordion.Collapse eventKey={this.props.completable.id}>
        <Card.Body>
          <Container fluid>
            <Row className="nodes">
              <Col>
                {!!this.props.completable.nodes && <CompletablesContainer localCompletables={this.props.completable.nodes} allCompletables={this.props.completables}toggleCompletable={this.props.toggleCompletable}/>}
              </Col>
            </Row>
            <Row className="content-blocks-row">
              <Col>
                {!!this.props.completable.content_blocks && this.props.completable.content_blocks.map(contentBlock => <ContentBlockContainer key={contentBlock.id} contentBlock={contentBlock}/>)}
              </Col>
            </Row>
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