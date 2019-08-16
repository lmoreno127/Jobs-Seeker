import React from "react";
import MyJob from "./MyJob";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar";
class MyJobs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar user={this.props.user} />
        <h1>My Jobs</h1>
        <Container className="containers">
          {this.props.jobs.map((job, id) => (
            <Row key={id}>
              <MyJob key={id} job={job} company={this.props.user.info} />
            </Row>
          ))}
        </Container>
        {this.props.jobs.length < 1 ? (
          <h5>This company doesn't jobs</h5>
        ) : (
          undefined
        )}
      </React.Fragment>
    );
  }
}
export default MyJobs;
