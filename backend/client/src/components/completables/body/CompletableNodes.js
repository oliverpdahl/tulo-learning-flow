import React, { Component } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'
import CompletablesContainer from '../CompletablesContainer'

class CompletableNodes extends Component {
  render(){
    return(
      <Row className="nodes pb-3">
        <Col>
          <CompletablesContainer localCompletables={this.props.nodes} allCompletables={this.props.allCompletables} toggleCompletable={this.props.toggleCompletable}/>
        </Col>
      </Row>
    )
  }
}

export default CompletableNodes