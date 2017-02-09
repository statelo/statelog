import React, { Component } from 'react';
import { CardFirstDeployment, SecondCard } from '../components/index';

class Home extends Component {
  render() {
    return(
      <div>
        <CardFirstDeployment/>
        <SecondCard/>
      </div>
    );
  }
}

export default Home;
