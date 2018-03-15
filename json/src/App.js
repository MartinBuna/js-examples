import React, {Component} from 'react';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  fetchBooks(context)
  {
    fetch('http://localhost:3000/posts')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        context.setState({books: myJson});
      });
  }

  render() {
    const books = this
      .state
      .books
      .map((book, i) => (
        <div key={book.id}>
          {book.id + " " + book.title + " " + book.author}
        </div>
      ));

    return (
      <div>
        {books}
        <button onClick={() => {
          this.fetchBooks(this)
        }}>{"Nahrát knihy"}</button>
      </div>
    );
  }
}

export default App;
