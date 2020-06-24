import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    completables: []
  }

  componentDidMount() {
    fetch('/api/v1/completables')
    .then(response => response.json)
    .then(data => { 
      console.log(data)
      // this.setState({ completables: data.completables})
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.completables.map(completable => completable.title)}
      </div>
    )
  }
}

export default App;
