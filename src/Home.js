import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
      <div className="hero">
        <h1>Let's Make Magic</h1>
      <button className="button-home">Book Today!</button>
      </div>
      </div>
    );
  }
}

export default Home;