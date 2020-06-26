import { fetchCompletables } from './actions/fetchCompletables'
import CompletablesContainer from './components/CompletablesContainer'
import React, { Component } from 'react';
import { connect } from 'react-redux'



class App extends Component {

  componentDidMount() {
    this.props.fetchCompletables()
  }

  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CompletablesContainer completables={this.props.completables}/>
    }
  }

  render() {
    return (
      <div className="App">
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
