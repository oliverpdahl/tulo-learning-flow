import React, { Component } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'
import CompletablesContainer from '../CompletablesContainer'

class CompletableNodes extends Component {
  render(){
    return(
      <Row className="content-blocks-row">
        <Col>
          {!!this.props.completable.content_blocks && this.props.completable.content_blocks.map(contentBlock => <ContentBlockContainer key={contentBlock.id} contentBlock={contentBlock}/>)}
        </Col>
      </Row>
    )
  }
}

export default CompletableNodes