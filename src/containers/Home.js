import React, { Component } from 'react';
import { Comment } from '../components/index';
import './styles/Home.scss';
import { Blogs } from './index';
import { FlashMessagesList } from '../components/index';

class Home extends Component {
  render() {
    return(
      <div>
        <Blogs />
        <FlashMessagesList />
        <Comment {...this.props} />
      </div>
    );
  }
}

export default Home;
