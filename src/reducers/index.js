import { combineReducers } from 'redux';
import ListingsReducer from './listings-reducer';
import AuthReducer from './auth-reducer';
import LocationsReducer from './locations-reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  listings: ListingsReducer,
  locations: LocationsReducer,
});

export default rootReducer;
