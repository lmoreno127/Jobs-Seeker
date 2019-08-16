import React from "react";
import Colombia from "../Colombia";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar";
class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      email: this.props.user.info.email,
      name: this.props.user.info.name,
      last_name: this.props.user.info.last_name,
      disabilities: this.props.user.info.disabilities
    };
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
  updateUser = event => {
    event.preventDefault();
    const formData = new FormData(document.querySelector(".edit-user"));
    fetch(`/users`, {
      method: "put",
      body: formData
    })
      .then(res => {
        if (res.status === 200) {
          window.location.href = "/user";
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleChangeE = event => {
    this.setState({ email: event.currentTarget.value });
  };
  handleChangeN = event => {
    this.setState({ name: event.currentTarget.value });
  };
  handleChangeL = event => {
    this.setState({ last_name: event.currentTarget.value });
  };
  handleChangeD = event => {
    this.setState({ disabilities: event.currentTarget.value });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar user={this.props.user} />
        <h1>Edit User</h1>
        <Form
          className="edit-user"
          encType="multipart/form-data"
          onSubmit={this.updateUser}
        >
          <Form.Group controlId="Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="user[email]"
              value={this.state.email}
              onChange={this.handleChangeE}
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
            <Form.Control
              type="text"
              placeholder="Your Name"
              name="user[name]"
              value={this.state.name}
              onChange={this.handleChangeN}
            />
          </Form.Group>
          <Form.Group controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="user[last_name]"
              value={this.state.last_name}
              onChange={this.handleChangeL}
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
          </Form.Group>
          <Form.Group controlId="Disabilities">
            <Form.Label>Disabilities</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Tell Us your disabilities"
              name="user[disabilities]"
              value={this.state.disabilities}
              onChange={this.handleChangeD}
            />
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
            Edit User
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default EditUser;
