import React from "react";
import MyJob from "./MyJob";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar";
class MyJobs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar user={{ info: this.props.company }} />
        <h1>My Jobs</h1>
        <Container>
          {this.props.jobs.map((job, id) => (
            <Row key={id}>
              <MyJob key={id} job={job} company={this.props.company} />
            </Row>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}
export default MyJobs;
