import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import comments from './comments';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  comments,
  flashMessages,
  routing: routerReducer
});

export default rootReducer;
