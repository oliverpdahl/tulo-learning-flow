import React, { Component } from 'react'
import { Col, Row, Container, Media } from 'react-bootstrap'
import ContentBlockTextBlock from './ContentBlockTextBlock'

class ContentBlockBody extends Component {
  render(){
    return(
      <Media.Body>
        <ContentBlockTextBlock contentBlock={this.props.contentBlock}/>
      </Media.Body>
    )
  }
}

export default ContentBlockBody