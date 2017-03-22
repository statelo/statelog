import React from 'react';
import { CardFirstDeployment, SecondCard } from '../components/index';

class Blogs extends React.Component {
  render() {
    return(
      <div>
        <CardFirstDeployment/>
        <SecondCard/>
        <CardFirstDeployment/>
        <SecondCard/>
        <CardFirstDeployment/>
      </div>
    );
  }
}

export default Blogs;
