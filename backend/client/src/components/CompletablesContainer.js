import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import CompletableCard from './CompletableCard';

class CompletablesContainer extends Component {
  listCompletables = () => {
    return(
      this.props.completables.map(completable => <CompletableCard key={completable.id} completable={completable}/>)
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

export default CompletablesContainer