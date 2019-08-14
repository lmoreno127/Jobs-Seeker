import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class CreateJob extends React.Component {
  render() {
    return (
      <div>
        <h1>Create Job</h1>
        <Form action={`/companies/${this.props.company.id}/jobs`} method="post">
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Job Title"
              name="job[jobtitle]"
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" name="job[description]" />
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Experience Required</Form.Label>
            <Form.Control type="number" name="job[experience_required]" />
          </Form.Group>
          <Form.Group controlId="contract">
            <Form.Label>Contract</Form.Label>
            <Form.Control as="select" name="job[contract]">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Freelancer</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default CreateJob;
