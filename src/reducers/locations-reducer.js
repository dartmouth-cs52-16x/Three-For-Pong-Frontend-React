import { ActionTypes } from '../actions';

const LocationsReducer = (state = { locations: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LOCATIONS:
      return Object.assign({}, state, { locations: action.payload });
    default:
      return state;
  }
};

export default LocationsReducer;
