import React, { Component } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'
import CompletablesContainer from '../CompletablesContainer'

class CompletableBottomRow extends Component {
  handleOnClick = () => {
    const allC = this.props.allCompletables.find(c => c.id === this.props.completable.id)
    this.props.toggleCompletable(allC)
  }
  
  render(){
    return(
      <Row className="bottom-row">
        <Col xs={12} sm={8} md={9}></Col>
        <Col>
          <Button variant="primary" onClick={this.handleOnClick} block>Complete</Button>
        </Col>
      </Row>
    )
  }
}

export default CompletableBottomRow