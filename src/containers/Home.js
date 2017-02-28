import React, { Component } from 'react';
import { Comment } from '../components/index';
import './styles/Home.scss';
import { FlashMessagesList } from '../components/index';

class Home extends Component {
  render() {
    return(
      <div>
        <FlashMessagesList />
        <h1 className="wishes">Leave some wishes</h1>
        <Comment {...this.props} />
      </div>
    );
  }
}

export default Home;
