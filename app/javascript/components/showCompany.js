import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar";
class showCompany extends React.Component {
  deleteAccount = () => {
    fetch("/companies", {
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
        <Navbar user={{ info: this.props.company }} />
        <h1>Show Company</h1>
        <img src={this.props.company.profile_photo.url} />
        <h5>Name:</h5>

        {this.props.company.name}
        <h5>Address:</h5>
        {this.props.company.address}
        <h5>City:</h5>
        {this.props.company.city}
        <h5>Department:</h5>
        {this.props.company.department}
        <Button variant="warning" href="/companies/edit">
          Edit Account
        </Button>
        <Button variant="danger" onClick={this.deleteAccount}>
          Delete Account
        </Button>
      </React.Fragment>
    );
  }
}

export default showCompany;
