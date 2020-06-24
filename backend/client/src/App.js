import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCompletables } from './actions/fetchCompletables'
import CompletablesContainer from './components/CompletablesContainer'



class App extends Component {

  componentDidMount() {
    this.props.fetchCompletables()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CompletablesContainer completables={this.props.completables} />
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
