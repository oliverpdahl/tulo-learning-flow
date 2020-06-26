import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ContentBlockTextBlock from './ContentBlockTextBlock'

class ContentBlockContainer extends Component {
  render(){
    return(
      <Row>
        <ContentBlockTextBlock contentBlock={this.props.contentBlock}/>
      </Row>
    )
  }
}

export default ContentBlockContainer