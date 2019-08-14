import React from "react";
import Nav from "react-bootstrap/Nav";

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Nav.Item>
          <Nav.Link href="">Jobs</Nav.Link>
        </Nav.Item>
        {this.props.user ? (
          <React.Fragment>
            <Nav.Item>
              <Nav.Link href={this.props.user.signOut}>Sign Out</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="">My Profile</Nav.Link>
            </Nav.Item>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Nav.Item>
              <Nav.Link onClick={this.props.showSignIn}>Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={this.props.showSignUp}>Sign Up</Nav.Link>
            </Nav.Item>
          </React.Fragment>
        )}
        {this.props.user && this.props.user.info.hasOwnProperty("address") ? (
          <React.Fragment>
            <Nav.Item>
              <Nav.Link href={`/companies/${this.props.user.info.id}/jobs`}>
                My Jobs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/companies/${this.props.user.info.id}/jobs/new`}>
                Create Jobs
              </Nav.Link>
            </Nav.Item>
          </React.Fragment>
        ) : this.props.user ? (
          <Nav.Item>
            <Nav.Link href="">My Applications</Nav.Link>
          </Nav.Item>
        ) : (
          undefined
        )}
      </Nav>
    );
  }
}
export default Navbar;
