import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react'
import Carousel from 'react-bootstrap/Carousel';
import AddBookButton from './AddBookButton'
import DeleteButton from './DeleteButton'
import UpdateBookButton from './UpdateBook'

class BestBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      bookName: '',
      description: '',
      status: '',
      email: ''
    }
  }

  changeName = (e) => {
    this.setState({bookName: e.target.value});
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
      this.props.updateBooks(books.data);
    } catch(error) {
      console.error(error);
    }
  }

  addBook = async (email) => {
    const SERVER = process.env.REACT_APP_SERVER;
    try {
      await axios.post(`${SERVER}/books`, {email: email, name: this.state.bookName, description: this.state.description, status: this.state.status});
      this.getBooks(email);
    } catch(error) {
      console.error(error);
    }
  }

  deleteBook = async (index) => {
    const email = this.state.email;
    const SERVER = process.env.REACT_APP_SERVER;
    try {
    await axios.delete(`${SERVER}/books/${index}`, {params: {email: email}});
    this.getBooks(email);
    } catch(error) {
      console.error(error);
    }
  }
  
componentDidMount = () => {
  const user = this.props.auth0.user;
  this.setState({email: user.email});
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
          <DeleteButton deleteBook={this.deleteBook} index={i}/>
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
      <UpdateBookButton showForm={this.props.showUpdateForm} 
      displayUpdateForm={this.props.displayUpdateForm}
      changeName={this.changeName}
      changeDescription={this.changeDescription}
      changeStatus={this.changeStatus}
      addBook={this.addBook}/>
      </>
    )
  }
}
export default withAuth0(BestBooks);
