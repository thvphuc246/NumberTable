import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const items = [];
for (let i = 1; i < 101; i++) {
  items.push(i);
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items
    }
  }
  
  render() {
    return (
      <div className="grid">
        {this.state.items.map(item => (
              <span key={item}>{item}</span>
        ))}
      </div>
    )
  }
}

export default App;
