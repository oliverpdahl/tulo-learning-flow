import { fetchCompletables } from "./actions/fetchCompletables";
import { fetchPaths } from "./actions/fetchPaths";
import CompletablesContainer from "./components/completables/CompletablesContainer";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBarContainer from "./components/navBar/NavBarContainer";
import { Container, Row, Col } from "react-bootstrap";
import AboutContainer from "./components/about/AboutContainer";
import UserContainer from "./components/user/UserContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchCompletables();
    this.props.fetchPaths();
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
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
        <Container fluid>
          <Row className="fill">
            <Col xs={0.5} className="fill">
              <NavBarContainer />
            </Col>
            <Route exact path="/" render={() => <Redirect to="/paths" />} />
            <Route path="/paths" render={() => this.handleLoading()} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/user" component={UserContainer} />
          </Row>
        </Container>
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
