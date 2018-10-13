import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      'items' : []
    };
  }
  
  componentDidMount(){
    this.getItems();
  }

  //trying to retrieve data from API
  getItems(){
    fetch('https://torre.bio/api/bios/jonathanbraga')
    .then(results => results.json())
    .then(results => this.setState({'items' : results}))
  }

  render() {
    return (
       
      <div className="App">
        <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload teste.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
