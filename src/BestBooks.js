import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react'
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {

  getBooks = async (email) => {
    const SERVER = process.env.REACT_APP_SERVER;
    try {
      const books = await axios.get(`${SERVER}/books`, {params: {email: email}});
      console.log(books);
      this.props.updateBooks(books.data);
    } catch(error) {
      console.error(error);
    }
    console.log(this.props.books);
  }
  
componentDidMount = () => {
  const user = this.props.auth0.user;
  this.getBooks(user.email)
}

  render() {
    return(
      this.props.books &&
      <Carousel> 
      {this.props.books.map((book, i) => (
        <Carousel.Item key={i}>
          <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400/111111/111111?text=' '"
          alt={`${i} slide`}
          />
          <Carousel.Caption>
            <h3>{book.name}</h3>
            <p>{book.description}</p>
            <p>{book.status}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      </Carousel>
    )
  }
}

export default withAuth0(BestBooks);
