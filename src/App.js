import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react'
import Login from './Login.js'
import Books from './BestBooks.js'
import Profile from './Profile.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      email: '',
      displayForm: false
    }
  }

  showForm = () => {
    this.state.displayForm ? this.setState({displayForm: false}) : this.setState({displayForm: true});
  }
  
  updateBooks = (bookData) => this.setState({books: bookData});

  render() {
    console.log('app', this.props)
     
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
              <Switch>
                <Route exact path="/">
                  {this.props.auth0.isAuthenticated ? 
                    <Books books={this.state.books} updateBooks={this.updateBooks} displayForm={this.state.displayForm} showForm={this.showForm}/> : <Login/>}
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
              </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
