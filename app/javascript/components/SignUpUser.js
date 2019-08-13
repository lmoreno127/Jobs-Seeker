import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class SignUpUser extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group controlId="Disabilities">
          <Form.Label>Tell us your Disabilities:</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignUpUser;
