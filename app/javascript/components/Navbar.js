import React from "react";
import Nav from "react-bootstrap/Nav";

class Navbar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        {!this.props.user ||
        this.props.user.info.hasOwnProperty("last_name") ? (
          <Nav.Item>
            <Nav.Link href="/all_jobs">Jobs</Nav.Link>
          </Nav.Item>
        ) : (
          undefined
        )}

        {this.props.user ? (
          <React.Fragment>
            <Nav.Item>
              <Nav.Link href={this.props.user.signOut}>Sign Out</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href={
                  this.props.user.info.hasOwnProperty("last_name")
                    ? `/user`
                    : `/companies/${this.props.user.info.id}`
                }
              >
                My Profile
              </Nav.Link>
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
            <Nav.Link href="/myapplications">My Applications</Nav.Link>
          </Nav.Item>
        ) : (
          undefined
        )}
      </Nav>
    );
  }
}
export default Navbar;
