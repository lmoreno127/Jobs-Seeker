import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showM: false };
  }
  company = this.props.companies.find(
    company => this.props.job.company_id === company.id
  );
  handleShow = event => {
    event.preventDefault();
    this.setState({ showM: true });
  };
  handleClose = () => {
    this.setState({ showM: false });
  };
  render() {
    return (
      <React.Fragment>
        <Col>
          <a href="" onClick={this.handleShow}>
            <Card>
              <img
                src={this.company.profile_photo.url}
                alt="Company Photo"
                className="companylogo"
              />
              <Card.Subtitle className="mb-2 text-muted">
                {this.company.name}
              </Card.Subtitle>
              <Card.Body>
                <Card.Title>{this.props.job.jobtitle}</Card.Title>
                <Card.Text>{this.props.job.description}</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Modal show={this.state.showM} onHide={this.handleClose}>
          <img
            src={this.company.profile_photo.url}
            alt="Company Photo"
            className="companylogo"
          />
          <Modal.Header closeButton>
            <Modal.Title>{this.props.job.jobtitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Description</h5>
            {this.props.job.description}
            <h5>City</h5>
            {this.props.job.city}
            <h5>Seniority</h5>
            {this.props.job.seniority}
            <h5>Contract:</h5>
            {this.props.job.contract}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">Apply</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Job;
