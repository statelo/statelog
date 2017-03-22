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
      <div>
        <div className="comment">
          <h1 className="wishes">Leave some wishes</h1>
          <div className="form">
            <input
              className="comment-input"
              onChange={this.handleChange}/>
            <button  className="comment-button" onClick={this.handleDeleteComment}>Delete</button>
            <button className="comment-button" onClick={this.handlePostComment}>Post</button>
          </div>
          {this.props.comments.text.map((text, i) =>
            <Text key={i}>
              {text.text}
            </Text>
          )}
        </div>
      </div>
    );
  }
}

export default Comment;
