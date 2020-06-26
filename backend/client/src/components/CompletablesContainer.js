import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import CompletableCard from './CompletableCard';
import { connect } from 'react-redux'
import { toggleCompletable } from '../actions/toggleCompletable'
import {Link} from 'react-router-dom'

class CompletablesContainer extends Component {
  listCompletables = () => {
    return(
      this.props.completables.map(completable => <CompletableCard key={completable.id} completable={completable} toggleCompletable={this.props.toggleCompletable}/>)
    )
  }
  render(){
    return(
    <Accordion defaultActiveKey="0">
      {this.listCompletables()}
    </Accordion>
    )
  }
}

export default connect(null, {toggleCompletable})(CompletablesContainer)