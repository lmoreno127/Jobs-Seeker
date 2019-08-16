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
        <Navbar user={this.props.user} />
        <h1>Show User</h1>
        <img src={this.props.user.info.profile_photo.url} />
        <h5>Name:</h5>
        {this.props.user.info.name + " " + this.props.user.info.last_name}
        <h5>Disabilities:</h5>
        {this.props.user.info.disabilities}
        <h5>City:</h5>
        {this.props.user.info.city}
        <h5>Department:</h5>
        {this.props.user.info.department}
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
