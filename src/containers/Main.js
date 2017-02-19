import React, { Component } from 'react';
import { Header } from '../components/index';

class Main extends Component {
  render() {
    return (
      <div className="background">
        <Header />

        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

export default Main;
