import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <h1 className="ui header">Business Name<i className="angle double right icon"></i></h1>
      </header>
      <button class="ui button">
        Follow
      </button>
      <div className="ui left vertical inverted sidebar labeled icon menu visible">
        <a className="item">
          <i className="home icon"></i>
          Home
        </a>
        <a className="item">
          <i className="block layout icon"></i>
          Topics
        </a>
        <a className="item">
          <i className="smile icon"></i>
          Friends
        </a>
      </div>
    </div>
  );
}

export default App;
