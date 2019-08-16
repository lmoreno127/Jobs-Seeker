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
        <Navbar user={this.props.user} />
        <h1>My Profile</h1>
        <img src={this.props.company.profile_photo.url} />
        <h5 id="companynamel">Name:</h5>
        <p id="companyname">{this.props.company.name}</p>
        <h5 id="companyal">Address:</h5>
        <p id="companya">{this.props.company.address}</p>
        <h5 id="companycl">City:</h5>
        <p id="companyc">{this.props.company.city}</p>
        <h5 id="companydl">Department:</h5>
        <p id="companyd">{this.props.company.department}</p>
        <Button variant="warning" href="/companies/edit" id="editc">
          Edit Account
        </Button>
        <Button variant="danger" onClick={this.deleteAccount} id="deletec">
          Delete Account
        </Button>
      </React.Fragment>
    );
  }
}

export default showCompany;
