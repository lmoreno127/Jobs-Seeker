import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Colombia from "../Colombia";
class SignUpUser extends React.Component {
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
    var citiesDep = this.department.ciudades.map((el, i) => (
      <option key={i}>{el}</option>
    ));
    this.setState({
      cities: citiesDep
    });
  };

  render() {
    return (
      <Form action="/users" method="post" encType="multipart/form-data">
        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="user[email]"
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
            name="user[password]"
          />
        </Form.Group>
        <Form.Group controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="user[password_confirmation]"
          />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" name="user[name]" />
        </Form.Group>
        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="user[last_name]"
          />
        </Form.Group>
        <Form.Group controlId="Department">
          <Form.Label>Department</Form.Label>
          <Form.Control
            as="select"
            onChange={this.handleChange}
            name="user[department]"
          >
            {this.departments}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control as="select" name="user[city]">
            {this.state.cities}
          </Form.Control>
          <Form.Group controlId="Disabilities">
            <Form.Label>Disabilities</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Tell Us your disabilities"
              name="user[disabilities]"
            />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="Curriculum">
          <Form.Label>CV</Form.Label>
          <Form.Control type="file" name="user[curriculum]" />
        </Form.Group>
        <Form.Group controlId="PhotoProfile">
          <Form.Label>Photo Profile</Form.Label>
          <Form.Control type="file" name="user[profile_photo]" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUpUser;
