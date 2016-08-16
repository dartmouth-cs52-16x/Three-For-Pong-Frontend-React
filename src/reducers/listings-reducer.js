import { ActionTypes } from '../actions';

const ListingsReducer = (state = { listings: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LISTINGS:
      return Object.assign({}, state, { listings: action.payload });
    default:
      return state;
  }
};

export default ListingsReducer;
