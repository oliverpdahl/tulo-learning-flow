import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CompletableTitle from './CompletableTitle'
import CompletableContent from './CompletableContent'

class CompletableCard extends Component {
  render(){
    return(
      <Card>
        <CompletableTitle completable={this.props.completable}/>
        <CompletableContent completable={this.props.completable} toggleCompletable={this.props.toggleCompletable}/>
      </Card>
    )
  }
}

export default CompletableCard