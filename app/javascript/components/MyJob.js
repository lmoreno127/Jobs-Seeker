import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
class MyJob extends React.Component {
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
  deleteJob = event => {
    event.preventDefault();
    console.log("fsf");
    fetch(`/companies/${this.props.company.id}/jobs/${this.props.job.id}`, {
      method: "delete"
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          location.reload();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Col>
          <Card>
            <img
              src={this.props.company.profile_photo.url}
              alt="Company Photo"
              className="companylogo"
            />
            <Card.Body>
              <Card.Title>
                <a href="" onClick={this.handleShow}>
                  {this.props.job.jobtitle}
                </a>
              </Card.Title>
              <Card.Text>{this.props.job.description}</Card.Text>
              <Button variant="success" href="">
                See Applications
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Modal show={this.state.showM} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.job.jobtitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Description</h5>
            {this.props.job.description}
            <h5>City</h5>
            {this.props.job.city}
            <h5>Experience Required</h5>
            {this.props.job.experience_required}
            <h5>Contract:</h5>
            {this.props.job.contract}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="warning"
              href={`/companies/${this.props.company.id}/jobs/${
                this.props.job.id
              }/edit`}
            >
              Edit Job
            </Button>
            <Button variant="danger" onClick={this.deleteJob}>
              Delete Job
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default MyJob;
