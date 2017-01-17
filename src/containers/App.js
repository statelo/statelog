import React, { Component } from 'react';
import { Header } from '../components/index';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        { this.props.children }
      </div>
    );
  }
}

export default App;
