import React from 'react';
import { withAuth0 } from '@auth0/auth0-react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class Profile extends React.Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <div className='pl-3'>
      {/* <h2>Hello, {user.given_name}. Or do you prefer {user.nickname}?</h2> */}
      <img src={user.picture} alt={user.name} width='300'/>
      <h3 className='mb-0'> {user.name}</h3>
      <h3 className='mb-0'>"{user.nickname}"</h3>
      <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
      </div>
    )
}
}

export default withAuth0(Profile);