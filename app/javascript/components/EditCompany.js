import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Colombia from "../Colombia";
import Navbar from "./Navbar";
class EditCompany extends React.Component {
  constructor(props) {
    super(props);
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
  updateCompany = event => {
    event.preventDefault();
    const formData = new FormData(document.querySelector(".edit-job"));
    fetch(`/companies/${this.props.company.id}`, {
      method: "put",
      body: formData
    })
      .then(res => {
        if (res.status === 200) {
          window.location.href = `/companies/${this.props.company.id}`;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar user={{ info: this.props.company }} />
        <h1>Edit Company</h1>
        <Form
          onSubmit={this.updateCompany}
          encType="multipart/form-data"
          className="edit-job"
        >
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
          <Form.Group controlId="PhotoProfile">
            <Form.Label>Photo Profile</Form.Label>
            <Form.Control type="file" name="company[profile_photo]" />
          </Form.Group>
          {/* <ReCAPTCHA
            ref={this.recaptchaRef}
            sitekey="6LeM6rIUAAAAABgoF2ji3hrIjn_FAoY2ylV3ppWi"
            onChange={this.onChange}
          /> */}
          ,
          <Button variant="primary" type="submit">
            Edit Company
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default EditCompany;
