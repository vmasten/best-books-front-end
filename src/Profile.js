import React from 'react';
import { withAuth0 } from '@auth0/auth0-react'

class Profile extends React.Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <div className='pl-3'>
      <h2>Hello, {user.given_name}. Or do you prefer {user.nickname}?</h2>
      <img src={user.picture} alt={user.name}/>
      <p>Email {user.given_name} at: {user.email}</p>
      </div>
  )
  }
  
}

export default withAuth0(Profile);