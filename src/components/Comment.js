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
    this.handlePostComment = this.handlePostComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  componentDidMount() {
    this.props.commentGetRequest()
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handlePostComment(e) {
    let text = this.state.text;
    this.props.commentPostRequest(text);
    this.props.commentGetRequest();
  }

  handleDeleteComment() {
    this.props.commentDeleteRequest();
    this.props.commentGetRequest();
  }

  render() {
    return(
      <div className="comment">
        <div className="form">
          <input
            onChange={this.handleChange}>
          </input>
          <button onClick={this.handleDeleteComment}>DELETE</button>
          <button onClick={this.handlePostComment}>POST</button>
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
