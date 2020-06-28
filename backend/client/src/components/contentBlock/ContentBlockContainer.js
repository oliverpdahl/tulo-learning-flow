import React, { Component } from 'react'
import { Col, Row, Container, Media } from 'react-bootstrap'
import ContentBlockBody from './ContentBlockBody'

class ContentBlockContainer extends Component {
  render(){
    return(
      <Media>
        <ContentBlockBody content={this.props.contentBlock}/>
      </Media>
    )
  }
}

export default ContentBlockContainer