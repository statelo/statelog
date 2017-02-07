const initialState = {
  text: []
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMMENT':
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}

export default comments;
