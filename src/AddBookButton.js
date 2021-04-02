import React from 'react';
import Button from 'react-bootstrap/Button';
import NewBook from './BookFormModal';

class AddBookButton extends React.Component {
  
  handleForm = (e) => {
    e.preventDefault();
    this.props.showForm();
  }

  render() {
    return (
      <>
      <Button className="m-3" onClick={(e) => this.handleForm(e)}>Add a new book</Button>
      {this.props.displayForm && 
        <NewBook  changeName={this.props.changeName} 
                  changeDescription={this.props.changeDescription} 
                  changeStatus={this.props.changeStatus}
                  addBook={this.props.addBook}
                  email={this.props.email}/>} 
      </>
    )
  }
}

export default AddBookButton;