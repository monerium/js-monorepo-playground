import { combineReducers } from 'redux';
import iamReducer from './iam/reducer';

const rootReducer = combineReducers({
  app: (state = null) => state,
  iam: iamReducer,
});

export default rootReducer;
