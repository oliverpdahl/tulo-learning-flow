import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCompletables } from ',/actions/fetchCompletables'

class CompletablesContainer extends Component {
  componentDidMount(){
    console.log(this.props)
    this.props.fetchCompletables()
  }
  
  render() {
    return (
      <div className="completables-container">
        <h1>Test</h1>
        <ul className="completables">
            {this.props.completables.map(completable =>{
            return(
              <li>{completable.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    completables: state.completables
  }
}

export default connect(mapStateToProps)(CompletablesContainer)