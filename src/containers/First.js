import React from 'react';
import { Comment } from '../components/index';

class First extends React.Component {
  render() {
    return(
      <div>
        <Comment {...this.props} />
      </div>
    );
  }
}

export default First;
