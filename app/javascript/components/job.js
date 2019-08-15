import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showM: false, showJob: true };
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
  signIn = () => {};
  render() {
    return (
      <React.Fragment>
        <Col>
          {this.props.user ? (
            this.props.userApplied.includes(this.props.user.info.id) ? (
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
                  <h5>You have Applied to this job</h5>
                </Card.Body>
              </Card>
            ) : (
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
            )
          ) : (
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
          )}
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
            {this.props.user ? (
              <form
                action={`/users/${this.props.user.info.id}/jobs/${
                  this.props.job.id
                }/appjobs`}
                method="post"
              >
                <Button variant="success" type="submit">
                  Apply
                </Button>
              </form>
            ) : (
              <Button variant="primary" onClick={this.signIn}>
                Sign In
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Job;
