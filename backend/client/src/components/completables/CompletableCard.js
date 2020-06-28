import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CompletableHeader from './CompletableHeader'
import CompletableContent from './CompletableContent'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

class CompletableCard extends Component {
  render(){
    return(
        <Card>
        <Link to={slugify(this.props.completable.title).toLocaleLowerCase()} style={{textDecoration: 'none'}}>
          <CompletableHeader completable={this.props.completable} allCompletables={this.props.allCompletables} />
          <CompletableContent completable={this.props.completable} allCompletables={this.props.allCompletables} toggleCompletable={this.props.toggleCompletable}/>
        </Link>
        </Card>
    )
  }
}

export default CompletableCard