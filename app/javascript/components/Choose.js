import React from "react";
import Button from "react-bootstrap/Button";
class Choose extends React.Component {
  render() {
    return (
      <div>
        <h2>Are you ?</h2>
        <Button variant="primary" onClick={() => {}}>
          Company
        </Button>
        <Button variant="success">User</Button>
      </div>
    );
  }
}

export default Choose;
