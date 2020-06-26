import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

class ContentBlockContainer extends Component {
  render(){
    return(
      <Row>
        <Col>
          <p className="text-dark">{this.props.contentBlock.text}</p>
        </Col>
      </Row>
    )
  }
}

export default ContentBlockContainer