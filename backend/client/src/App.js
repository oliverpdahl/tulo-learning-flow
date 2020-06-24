import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCompletables } from './actions/fetchCompletables'


class App extends Component {

  componentDidMount() {
    this.props.fetchCompletables()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <p>{this.props.completables.map(completable => completable.title)}</p>
    }
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state)}
        {this.handleLoading()}
      </div>
    )
  }
}

const mapDispatchToProps = state => {
  return { 
    completables: state.completables,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, {fetchCompletables})(App)
