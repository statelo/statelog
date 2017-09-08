import React from 'react';
import './styles/Blogs.scss';
import { CardFirstDeployment, SecondCard } from '../components/index';

class Blogs extends React.Component {
  render() {
    return(
      <div className="blogs">
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
