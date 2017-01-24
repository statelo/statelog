const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state, {
          text: action.text
        }
      ]
    default:
      return state;
  }
}

export default comments;
