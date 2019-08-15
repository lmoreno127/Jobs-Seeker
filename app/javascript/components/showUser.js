import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar";
class showUser extends React.Component {
  deleteAccount = () => {
    fetch("/users", {
      method: "delete"
    })
      .then(res => {
        location.assign("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar user={{ info: this.props.user }} />
        <h1>Show User</h1>
        <img src={this.props.user.profile_photo.url} />
        <h5>Name:</h5>
        {this.props.user.name + " " + this.props.user.last_name}
        <h5>Disabilities:</h5>
        {this.props.user.disabilities}
        <h5>City:</h5>
        {this.props.user.city}
        <h5>Department:</h5>
        {this.props.user.department}
        <Button variant="warning" href="/users/edit">
          Edit User
        </Button>
        <Button variant="danger" onClick={this.deleteAccount}>
          Delete Account
        </Button>
      </React.Fragment>
    );
  }
}

export default showUser;
