import React from "react";
import Navbar from "./Navbar";
import Carousel from "react-bootstrap/Carousel";
import Im1 from "./im1.jpg";
import Im2 from "./im2.jpg";
import Im3 from "./im3.jpg";
import Im4 from "./im4.jpg";
import JobsSection from "./JobsSection";
import CompanySection from "./CompanySection";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignIn from "./SignIn";
import SignUpUser from "./SignUpUser";
import SignUpCompany from "./SignUpCompany";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      showModalSU: false,
      showModalSI: false,
      showChoose: true,
      isUser: false
    };
  }
  showSignUp = () => {
    this.setState({ showModalSU: true });
  };
  hideSignUp = () => {
    this.setState({ showModalSU: false, showChoose: true, isUser: false });
  };

  showSignIn = () => {
    this.setState({ showModalSI: true });
  };
  hideSignIn = () => {
    this.setState({ showModalSI: false, showChoose: true, isUser: false });
  };
  render() {
    return (
      <div>
        <Navbar
          showSignIn={this.showSignIn}
          showSignUp={this.showSignUp}
          user={this.props.user}
        />
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
        {!this.props.user ? (
          <CompanySection showSignUp={this.showSignUp} />
        ) : (
          <h1>Profile Info</h1>
        )}

        <Modal show={this.state.showModalSI} onHide={this.hideSignIn}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          {this.state.showChoose ? (
            <Modal.Body>
              <h2>Sign In as</h2>
              <Button
                variant="primary"
                onClick={() => {
                  this.setState({ showChoose: false });
                }}
              >
                Company
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  this.setState({ showChoose: false, isUser: true });
                }}
              >
                User
              </Button>
            </Modal.Body>
          ) : (
            <Modal.Body>
              <SignIn
                ro={this.state.isUser ? "/users/sign_in" : "/companies/sign_in"}
                namef={
                  this.state.isUser
                    ? { email: "user[email]", password: "user[password]" }
                    : { email: "company[email]", password: "company[password]" }
                }
              />
            </Modal.Body>
          )}

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
          {this.state.showChoose ? (
            <Modal.Body>
              <h2>Sign Up as</h2>
              <Button
                variant="primary"
                onClick={() => {
                  this.setState({ showChoose: false });
                }}
              >
                Company
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  this.setState({ showChoose: false, isUser: true });
                }}
              >
                User
              </Button>
            </Modal.Body>
          ) : this.state.isUser ? (
            <Modal.Body>
              <SignUpUser />
            </Modal.Body>
          ) : (
            <Modal.Body>
              <SignUpCompany />
            </Modal.Body>
          )}
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
