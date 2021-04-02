import React from 'react';
import Button from 'react-bootstrap/Button'

class DeleteButton extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.deleteBook(this.props.index)

  }
  render() {

    return (
      <Button className="col-centered mb-2" onClick={(e) => this.handleClick(e)}>Delete</Button>
    );
  }
}

export default DeleteButton;