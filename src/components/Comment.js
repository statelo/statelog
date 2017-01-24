import React from 'react';
import './styles/Comment.scss';
import { addComment } from '../actions';
import { store } from '../index';

class Comment extends React.Component {
  render() {
    let input;

    return(
      <div className="comment">
        {this.props.comments.map((comment, i) =>
          <p key={i}>
            {comment.text}
          </p>
        )}

        <form onSubmit={e => {
          e.preventDefault();
        }}>
          <textarea
            rows="4"
            ref={node => { input = node }}></textarea>
          <button
            type="submit"
            onClick={() => {
              store.dispatch(
                addComment(input.value)
              )
              input.value = ''
            }}>
            ADD COMMENT
          </button>
        </form>
      </div>
    );
  }
}

export default Comment;
