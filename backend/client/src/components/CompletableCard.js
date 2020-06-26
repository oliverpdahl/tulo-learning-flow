import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CompletableTitle from './CompletableTitle'
import CompletableContent from './CompletableContent'
import { Link } from 'react-router-dom'

var slugify = require('slugify')

class CompletableCard extends Component {
  render(){
    return(
      
        <Card>
        <Link to={this.props.completable.title} style={{textDecoration: 'none'}}>
          <CompletableTitle completable={this.props.completable}/>
          <CompletableContent completable={this.props.completable} toggleCompletable={this.props.toggleCompletable}/>
        </Link>
        </Card>
    )
  }
}

export default CompletableCard