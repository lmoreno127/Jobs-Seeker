import React from "react";
import Nav from "react-bootstrap/Nav";

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Nav.Item>
          <Nav.Link href="/jobs">Jobs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={this.props.showSignIn}>Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={this.props.showSignUp}>Sign Up</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
export default Navbar;
