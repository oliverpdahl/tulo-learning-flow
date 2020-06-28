import React, { Component } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'
import ContentBlockContainer from '../../contentBlock/ContentBlockContainer'

class CompletableContentBlocks extends Component {
  render(){
    return(
      <Row className="content-blocks-row">
        <Col>
          {this.props.contentBlocks.map(contentBlock => <ContentBlockContainer key={contentBlock.id} contentBlock={contentBlock}/>)}
        </Col>
      </Row>
    )
  }
}

export default CompletableContentBlocks