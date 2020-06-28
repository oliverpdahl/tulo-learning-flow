import React, { Component } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'
import CompletableCompleteButton from './CompletableCompleteButton'

class CompletableBottomRow extends Component {  
  render(){
    return(
      <Row className="bottom-row">
        <Col xs={12} sm={8} md={9}></Col>
        <Col>
          <CompletableCompleteButton completable={this.props.completable} allCompletables={this.props.allCompletables} toggleCompletable={this.props.toggleCompletable}/>
        </Col>
      </Row>
    )
  }
}

export default CompletableBottomRow