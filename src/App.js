import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul className="headerList">
            <li className="hItem">
              <a href="/">Google Books</a>
            </li>
            <li className="hItem-small">
              <a href="/">Search</a>
            </li>
            <li className="hItem-small">
              <a href="/">Saved</a>
              {/*Form.state.score*/}
            </li>
          </ul>
        </nav>

        <header className="App-header">
          <h1>Google Books Search!</h1>
          <h2>Search for and Save Books of Interest</h2>
        </header>
        <main className="game">
          {<Form />}
        </main>

        <footer className="footer">
          <div className="bottom">
            Google Books React App
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
