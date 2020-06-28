import React, { Component } from "react";
import { Container, Card, Accordion } from "react-bootstrap";
import CompletableNodes from "./CompletableNodes";
import CompletableContentBlocks from "./CompletableContentBlocks";
import CompletableBottomRow from "./bottomRow/CompletableBottomRow";

class CompletableBody extends Component {
  render() {
    return (
      <Accordion.Collapse eventKey={this.props.completable.id}>
        <Card.Body>
          <Container fluid>
            {!!this.props.completable.nodes &&
              !!this.props.completable.nodes[0] && (
                <CompletableNodes
                  nodes={this.props.completable.nodes}
                  allCompletables={this.props.allCompletables}
                  toggleCompletable={this.props.toggleCompletable}
                />
              )}
            {!!this.props.completable.content_blocks &&
              !!this.props.completable.content_blocks[0] && (
                <CompletableContentBlocks
                  contentBlocks={this.props.completable.content_blocks}
                />
              )}
            <CompletableBottomRow
              completable={this.props.completable}
              allCompletables={this.props.allCompletables}
              toggleCompletable={this.props.toggleCompletable}
            />
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    );
  }
}

export default CompletableBody;
