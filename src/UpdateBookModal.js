import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react'

class UpdateBook extends React.Component {

  
  breakStuff = (e) => {
    e.preventDefault();
    this.props.updateBook(this.props.index);
    this.props.showForm();
  }
  
  render() {
    return (
      <>
      <Form onSubmit = {(e) => this.breakStuff(e)}>
        <Form.Group controlId="bookForm">
          <Form.Control onChange={(e) => this.props.changeName(e)} className="w-50 m-auto" type="text" placeholder="Book name"/>
        </Form.Group>
        <Form.Group controlId="descriptionForm">
          <Form.Control onChange={(e) => this.props.changeDescription(e)} className="w-50 m-auto" type="text" placeholder="Book description"/>
        </Form.Group>
        <Form.Group controlId="readForm">
          <Form.Control onChange={(e) => this.props.changeStatus(e)} className="w-50 m-auto" type="text" placeholder="Read, unread, or reading?"/>
        </Form.Group>
        <Button className="mb-3" type="submit">Submit</Button>
      </Form>
      </>
    )
  }
}

export default withAuth0(UpdateBook);