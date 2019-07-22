import React, { Component } from 'react';
import Body from './components/Body';
import NavBar from './components/NavBar'

import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Body/>  
      </div>
    );
  }
}

export default App;
