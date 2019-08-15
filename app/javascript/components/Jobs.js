import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar";
import Job from "./job";
class Jobs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar user={this.props.user} />
        <h1>Jobs Page</h1>
        <Container>
          {this.props.jobs.map((job, id) => (
            <Row key={id}>
              <Job key={id} job={job} companies={this.props.companies} />
            </Row>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default Jobs;
