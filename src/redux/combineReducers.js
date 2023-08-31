import { combineReducers } from 'redux';
import DataReducer from './reducer';

const CombineReducer = combineReducers({
  OrgUserData: DataReducer,
});
export default CombineReducer;
