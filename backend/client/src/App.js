import { fetchCompletables } from "./actions/fetchCompletables";
import { fetchPaths } from "./actions/fetchPaths";
import CompletablesContainer from "./components/completables/CompletablesContainer";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBarContainer from "./components/navBar/NavBarContainer";
import { Container, Row, Col } from "react-bootstrap";

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
          <Row>
            <Col xs={0.5} className="bg-primary">
              <NavBarContainer />
            </Col>
            <Col>
              <Link to="/paths/" style={{ textDecoration: "none" }}>
                {this.handleLoading()}
              </Link>
            </Col>
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
