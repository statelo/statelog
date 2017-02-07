import axios from 'axios';

export const addIrina = (sister) => {
  return {
    type: 'ADD_SISTER',
    sister
  };
}

export const commentSuccess = (text) => {
  return {
    type: 'GET_COMMENT',
    text
  }
}

export const commentGetRequest = () => {
  return (dispatch) => {
    return axios.get('/api/comments')
      .then(response => {
        dispatch(commentSuccess(response.data))
      });
  }
}

export const addCommentText = (text) => {
  return (dispatch) => {
    return axios.post('/api/comments', { text })
      .then(response => {
        return JSON.stringify(response.data)
      })
  }
}
