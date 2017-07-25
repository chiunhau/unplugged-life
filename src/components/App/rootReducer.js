import { combineReducers } from 'redux';
// Import all reducers below
import syncExample from '../SyncExample/reducer';
import fetchedData from '../fetchReducer';

export default combineReducers({
  syncExample,
  fetchedData,
});
