import React from "react";
import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
class myApplications extends React.Component {
  render() {
    console.log(this.props.myjobs);
    return (
      <React.Fragment>
        <Navbar user={this.props.user} />
        <h1>My Applications</h1>
        <Container>
          {this.props.myjobs.map((job, id) => (
            <Row key={id}>
              <Col key={id}>
                <Card key={id}>
                  <img
                    src={job.company.profile_photo.url}
                    className="companylogo"
                  />
                  <Card.Subtitle className="mb-2 text-muted namec">
                    {job.company.name}
                  </Card.Subtitle>
                  <Card.Body>
                    <Card.Title>{job.jobtitle}</Card.Title>
                    <Card.Text>{job.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
        {this.props.myjobs.length < 1 ? (
          <h5>You don't have applications</h5>
        ) : (
          undefined
        )}
      </React.Fragment>
    );
  }
}

export default myApplications;
