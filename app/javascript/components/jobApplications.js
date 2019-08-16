import React from "react";
import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
class jobApplications extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showM: false };
  }

  handleShow = event => {
    event.preventDefault();
    this.setState({ showM: true });
  };
  handleClose = () => {
    this.setState({ showM: false });
  };
  deleteApp = (userid, jobappid) => {
    fetch(`/users/${userid}/jobs/${this.props.job.id}/appjobs/${jobappid}`, {
      method: "delete"
    })
      .then(res => {
        location.assign("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.props.user} />
        <h1>{this.props.job.jobtitle + " Applications"}</h1>
        <Container>
          {this.props.appjobs.map((appjob, id) => (
            <React.Fragment>
              <Row key={id}>
                <Col key={id}>
                  <Card key={id}>
                    <img
                      src={appjob.user.profile_photo.url}
                      alt="User Photo"
                      className="companylogo"
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href="" onClick={this.handleShow}>
                          {appjob.user.name + " " + appjob.user.last_name}
                        </a>
                      </Card.Title>
                      <h5>Disabilities</h5>
                      <Card.Text>{appjob.user.disabilities}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Modal show={this.state.showM} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {appjob.user.name + " " + appjob.user.last_name}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>Email</h5>
                  {appjob.user.email}
                  <h5>City</h5>
                  {appjob.user.city}
                  <h5>Department</h5>
                  {appjob.user.department}
                  <h5>Disabilities</h5>
                  {appjob.user.disabilities}
                  <h5>Curriculum</h5>
                  <form method="get" action={appjob.user.curriculum.url}>
                    <Button variant="info" type="submit">
                      Download
                    </Button>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="danger"
                    onClick={event => {
                      event.preventDefault();
                      this.deleteApp(appjob.user.id, appjob.id);
                    }}
                  >
                    Delete Application
                  </Button>
                </Modal.Footer>
              </Modal>
            </React.Fragment>
          ))}
        </Container>
        {this.props.appjobs.length < 1 ? (
          <h5>This job doesn't have applications</h5>
        ) : (
          undefined
        )}
      </React.Fragment>
    );
  }
}

export default jobApplications;
