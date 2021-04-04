import React from 'react';
import Button from 'react-bootstrap/Button';
import UpdateBook from './UpdateBookModal';

class UpdateBookButton extends React.Component {
  
  handleForm = (e) => {
    e.preventDefault();
    this.props.showForm();
  }

  render() {
    return (
      <>
      <Button className="col-centered ml-3 mb-2" onClick={(e) => this.handleForm(e)}>Update</Button>
      {this.props.displayUpdateForm && 
        <UpdateBook 
        index={this.props.index}
        changeName={this.props.changeName} 
        changeDescription={this.props.changeDescription} 
        changeStatus={this.props.changeStatus}
        updateBook={this.props.updateBook}
        email={this.props.email}
        showForm={this.props.showForm}/>} 
      </>
    )
  }
}

export default UpdateBookButton;