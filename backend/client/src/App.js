import { fetchCompletables } from "./actions/fetchCompletables";
import { fetchPaths } from "./actions/fetchPaths";
import CompletablesContainer from "./components/completables/CompletablesContainer";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchCompletables();
    this.props.fetchPaths();
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      console.log(this.props.completables);
      return (
        <CompletablesContainer
          localCompletables={this.props.paths}
          allCompletables={this.props.completables}
        />
      );
    }
  };

  render() {
    return (
      <Router>
        <Link to="/paths" style={{ textDecoration: "none" }}>
          {this.handleLoading()}
        </Link>
      </Router>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {
    completables: state.completables,
    paths: state.paths,
    loading: state.loading,
  };
};

export default connect(mapDispatchToProps, { fetchCompletables, fetchPaths })(
  App
);
