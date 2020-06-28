import React, { Component } from 'react'
import { Col, Row, Container, Media } from 'react-bootstrap'
import ContentBlockTextBlock from './ContentBlockTextBlock'

class ContentBlockContainer extends Component {
  render(){
    return(
      <Media>
        <Media.Body>
          <ContentBlockTextBlock contentBlock={this.props.contentBlock}/>
        </Media.Body>
      </Media>
    )
  }
}

export default ContentBlockContainer