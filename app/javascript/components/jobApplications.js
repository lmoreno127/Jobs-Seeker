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
  deleteApp = (event, id) => {
    console.log("iij");
  };

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.props.user} />
        <h1>{this.props.job.jobtitle + " Applications"}</h1>
        <Container>
          {this.props.users.map((user, id) => (
            <React.Fragment>
              <Row key={id}>
                <Col key={id}>
                  <Card key={id}>
                    <img
                      src={user.profile_photo.url}
                      alt="User Photo"
                      className="companylogo"
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href="" onClick={this.handleShow}>
                          {user.name + " " + user.last_name}
                        </a>
                      </Card.Title>
                      <h5>Disabilities</h5>
                      <Card.Text>{user.disabilities}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Modal show={this.state.showM} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{user.name + " " + user.last_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>Email</h5>
                  {user.email}
                  <h5>City</h5>
                  {user.city}
                  <h5>Department</h5>
                  {user.department}
                  <h5>Disabilities</h5>
                  {user.disabilities}
                  <h5>Curriculum</h5>
                  <form method="get" action={user.curriculum.url}>
                    <Button variant="info" type="submit">
                      Download
                    </Button>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={this.deleteApp(user.id)}>
                    Delete Job
                  </Button>
                </Modal.Footer>
              </Modal>
            </React.Fragment>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default jobApplications;
