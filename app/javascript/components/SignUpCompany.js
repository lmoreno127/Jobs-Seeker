import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Colombia from "../Colombia";
class SignUpCompany extends React.Component {
  constructor() {
    super();
    this.state = { cities: [] };
    this.departments = Colombia.map((el, i) => (
      <option key={i}>{el.departamento}</option>
    ));
    this.department = {};
  }
  handleChange = event => {
    this.department = Colombia.find(
      el => el.departamento === event.currentTarget.value
    );
    this.setState({
      cities: this.department.ciudades.map((el, i) => (
        <option key={i}>{el}</option>
      ))
    });
  };

  render() {
    return (
      <Form action="/companies" method="post">
        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="company[email]"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="company[password]"
          />
        </Form.Group>
        <Form.Group controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="company[password_confirmation]"
          />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company Name"
            name="company[name]"
          />
        </Form.Group>
        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company Address"
            name="company[address]"
          />
        </Form.Group>
        <Form.Group controlId="Department">
          <Form.Label>Department</Form.Label>
          <Form.Control
            as="select"
            onChange={this.handleChange}
            name="company[department]"
          >
            {this.departments}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control as="select" name="company[city]">
            {this.state.cities}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUpCompany;
