import React, { Component } from 'react';
import { Comment } from '../components/index';
import './styles/Home.scss';

class Home extends Component {
  render() {
    return(
      <div>
        <h1 className="wishes">Leave some wishes</h1>
        <Comment {...this.props} />
      </div>
    );
  }
}

export default Home;
