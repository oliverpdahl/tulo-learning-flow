import { fetchCompletables } from './actions/fetchCompletables'
import CompletablesContainer from './components/CompletablesContainer'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.fetchCompletables()
  }

  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      console.log(this.props.completables)
      return <CompletablesContainer completables={this.props.completables}/>
    }
  }

  render() {
    return (
      <Router>
        <Link to='/paths' style={{textDecoration: 'none'}}>{this.handleLoading()}</Link>
      </Router>
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
