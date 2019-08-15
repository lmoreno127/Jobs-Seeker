import React from "react";
import Buttom from "react-bootstrap/Button";

class showUser extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Show User</h1>
        <h5>Name:</h5>
        {this.props.user.name + " " + this.props.user.last_name}
        <h5>Disabilities:</h5>
        {this.props.company.disabilities}
        <h5>City:</h5>
        {this.props.company.city}
        <h5>Department:</h5>
        {this.props.company.department}
        <Buttom>Edit User</Buttom>
        <Buttom>Delete Account</Buttom>
      </React.Fragment>
    );
  }
}

export default showUser;
