import React from "react";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import Im1 from "./im1.jpg";
import Im2 from "./im2.jpg";
import Im3 from "./im3.jpg";
import Im4 from "./im4.jpg";
import JobsSection from "./JobsSection";
import CompanySection from "./CompanySection";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignIn from "./SignIn";
import Choose from "./Choose";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      showModalSU: false,
      showModalSI: false,
      showChoose: true
    };
  }
  showSignUp = () => {
    this.setState({ showModalSU: true });
  };
  hideSignUp = () => {
    this.setState({ showModalSU: false });
  };

  showSignIn = () => {
    this.setState({ showModalSI: true });
  };
  hideSignIn = () => {
    this.setState({ showModalSI: false });
  };
  render() {
    return (
      <div>
        <Nav>
          <Nav.Item>
            <Nav.Link>Jobs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={this.showSignIn}>Sign In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={this.showSignUp}>Sign Up</Nav.Link>
          </Nav.Item>
        </Nav>
        <Carousel interval="2000">
          <Carousel.Item>
            <img className="d-block w-50" src={Im1} alt="First slide" />
            <Carousel.Caption>
              <h3>We want to help you finding job</h3>
              <p>We know abilities that you can give </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={Im2} alt="Third slide" />
            <Carousel.Caption>
              <h3>We want to help you finding job</h3>
              <p>We know abilities that you can give </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={Im3} alt="Third slide" />
            <Carousel.Caption>
              <h3>We want to help you finding job</h3>
              <p>We know abilities that you can give </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={Im4} alt="Fourth slide" />
            <Carousel.Caption>
              <h3>We want to help you finding job</h3>
              <p>We know abilities that you can give </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <JobsSection />
        <CompanySection />
        <Modal show={this.state.showModalSI} onHide={this.hideSignIn}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Are you ?</h2>
            <Button
              variant="primary"
              onClick={() => {
                console.log("company");
              }}
            >
              Company
            </Button>
            <Button
              variant="success"
              onClick={() => {
                console.log("user");
              }}
            >
              User
            </Button>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showModalSU} onHide={this.hideSignUp}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>Sign Up</Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Main;
