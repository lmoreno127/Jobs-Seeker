import React from "react";
import C1 from "./c1.jpg";
import C2 from "./c2.jpg";
import C3 from "./c3.jpg";
import C4 from "./c4.png";
import C5 from "./c5.jpg";
import C6 from "./c6.png";
import C7 from "./c7.jpg";
import C8 from "./c8.jpg";
import Button from "react-bootstrap/Button";
class CompanySection extends React.Component {
  render() {
    return (
      <div>
        <h2>We work with the following companies</h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={C1} alt="c1" className="logo" />
            </div>
            <div className="col">
              <img src={C2} alt="c2" className="logo" />
            </div>
            <div className="col">
              <img src={C3} alt="c3" className="logo" />
            </div>
            <div className="col">
              <img src={C4} alt="c4" className="logo" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src={C5} alt="c5" className="logo" />
            </div>
            <div className="col">
              <img src={C6} alt="c6" className="logo" />
            </div>
            <div className="col">
              <img src={C7} alt="c7" className="logo" />
            </div>
            <div className="col">
              <img src={C8} alt="c8" className="logo" />
            </div>
          </div>
        </div>
        <h2>Do you want to hire great people with disabilites?</h2>
        <Button variant="success" onClick={this.props.showSignUp}>
          Sign Up
        </Button>
      </div>
    );
  }
}

export default CompanySection;
