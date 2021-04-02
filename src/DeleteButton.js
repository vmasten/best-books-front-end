import React from 'react';
import Button from 'react-bootstrap/Button'

function DeleteButton() {

  return (
    <Button className="col-centered mb-2" onClick={() => this.props.deleteBook}>Delete</Button>
  );
}

export default DeleteButton;