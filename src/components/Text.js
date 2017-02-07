import React from 'react';
import './styles/Text.scss';

class Text extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.children}</p>
        <hr className="line" />
      </div>
    )
  }
}

export default Text;
