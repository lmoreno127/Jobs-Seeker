import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class MyJob extends React.Component {
  render() {
    return (
      <Col>
        <Card>
          <img
            src={this.props.company.profile_photo.url}
            alt="Company Photo"
            className="companylogo"
          />
          <Card.Body>
            <Card.Title>
              <a
                href={`/companies/${this.props.company.id}/jobs/${
                  this.props.job.id
                }`}
              >
                {this.props.job.jobtitle}
              </a>
            </Card.Title>
            <Card.Text>{this.props.job.description}</Card.Text>
            <Button variant="success" href="">
              See Applications
            </Button>
            {/* <form
              action={`/companies/${this.props.company.id}/jobs/${
                this.props.job.id
              }`}
              method="delete"
            >
              <Button variant="danger" type="submit">
                Delete Job
              </Button>
            </form> */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MyJob;
