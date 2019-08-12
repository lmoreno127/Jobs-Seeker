import React from "react";
import Button from "react-bootstrap/Button";
class JobsSection extends React.Component {
  render() {
    return (
      <div>
        <h2>Do you like to see jobs avaliable for you?</h2>
        <Button variant="info">See jobs</Button>
      </div>
    );
  }
}

export default JobsSection;
