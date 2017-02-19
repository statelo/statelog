import axios from 'axios';

export const signupPostRequest = (userData) => {
  return (dispatch) => {
    return axios.post('/api/signup', userData);
  }
}

export const loginPostRequest = (userData) => {
  return(dispatch) => {
    return axios.post('/api/login', userData);
  }
}
