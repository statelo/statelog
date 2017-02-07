import React from 'react';
import './styles/Comment.scss';
import { Text } from './index'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddCommentText = this.handleAddCommentText.bind(this);
  }

  componentDidMount() {
    this.props.commentGetRequest()
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleAddCommentText() {
    let text = this.state.text;
    this.props.addCommentText(text);
    this.props.commentGetRequest();
  }

  render() {
    return(
      <div className="comment">
        <div className="form">
          <input
            onChange={this.handleChange}>
          </input>
          <button>DELETE</button>
          <button onClick={this.handleAddCommentText}>POST</button>
        </div>
        {this.props.comments.text.map((text, i) =>
          <Text key={i}>
            {text.text}
          </Text>
        )}
      </div>
    );
  }
}

export default Comment;
