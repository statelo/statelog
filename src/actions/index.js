import axios from 'axios';

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

export const commentPostRequest = (text) => {
  return (dispatch) => {
    return axios.post('/api/comments', { text })
      .then(response => {
        return JSON.stringify(response.data)
      })
  }
}

export const commentDeleteRequest = () => {
  return (dispatch) => {
    return axios.delete('/api/comments')
      .then(response => {
        return JSON.stringify(response.data)
      })
  }
}
