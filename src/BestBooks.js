import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react'
import Carousel from 'react-bootstrap/Carousel';
import AddBookButton from './AddBookButton'
import DeleteButton from './DeleteButton'

class BestBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      bookName: '',
      description: '',
      status: ''
    }
  }

  changeName = (e) => {
    this.setState({name: e.target.value});
  }

  changeDescription = (e) => {
    this.setState({description: e.target.value});
  }

  changeStatus = (e) => {
    this.setState({status: e.target.value});
  }

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

  addBook = async (email) => {
    const SERVER = process.env.REACT_APP_SERVER;
    try {
      const books = await axios.post(`${SERVER}/books`, {email: email, name: this.state.bookName, description: this.state.description, status: this.state.status});
      console.log(books);
      this.getBooks(email);
    } catch(error) {
      console.error(error);
    }
    console.log(this.props.books);
  }

  deleteBook = () => {
    console.log('here');
  }

  
componentDidMount = () => {
  const user = this.props.auth0.user;
  this.getBooks(user.email)
}

  render() {
    return(
      this.props.books &&
      <>
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
          <DeleteButton/>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      </Carousel>
      <AddBookButton showForm={this.props.showForm} 
      displayForm={this.props.displayForm}
      changeName={this.changeName}
      changeDescription={this.changeDescription}
      changeStatus={this.changeStatus}
      addBook={this.addBook}/>
      </>
    )
  }
}
export default withAuth0(BestBooks);
