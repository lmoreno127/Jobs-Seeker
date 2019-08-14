import React from "react";
import Button from "react-bootstrap/Button";
class JobsSection extends React.Component {
  render() {
    return (
      <div>
        <h2>Do you like to see jobs avaliable for you?</h2>
        <form action="/jobs" method="get">
          <Button variant="info" type="submit">
            See jobs
          </Button>
        </form>
      </div>
    );
  }
}

export default JobsSection;
