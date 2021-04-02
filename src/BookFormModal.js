import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react'

class NewBook extends React.Component {

  
  breakStuff = (e) => {
    e.preventDefault();
    this.props.addBook(this.props.auth0.user.email);
  }
  
  render() {
    return (
      <>
      {console.log(this.props)}
      <Form className="pt-3" onSubmit = {(e) => this.breakStuff(e)}>
        <Form.Group controlId="bookForm">
          <Form.Control onChange={(e) => this.props.changeName(e)} className="w-50" type="text" placeholder="Book name"/>
        </Form.Group>
        <Form.Group controlId="descriptionForm">
          <Form.Control onChange={(e) => this.props.changeDescription(e)} className="w-50" type="text" placeholder="Book description"/>
        </Form.Group>
        <Form.Group controlId="readForm">
          <Form.Control onChange={(e) => this.props.changeStatus(e)} className="w-50" type="text" placeholder="Read, unread, or reading?"/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      </>
    )
  }
}

export default withAuth0(NewBook);