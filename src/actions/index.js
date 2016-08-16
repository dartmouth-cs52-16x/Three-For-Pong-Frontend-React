import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'https://threeforpong.herokuapp.com/api';
const API_KEY = '?key=matthew_goldstein';

// keys for actiontypes
export const ActionTypes = {
  FETCH_LISTINGS: 'FETCH_LISTINGS',
  UPDATE_LISTING: 'UPDATE_LISTING',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  FETCH_LOCATIONS: 'FETCH_LOCATIONS',
  // BAD_CREDS: 'BAD_CREDS',
  // PASS_MISMATCH: 'PASS_MISMATCH',
  // INCOMPLETE: 'INCOMPLETE',
  // EXISTED: 'EXISTED',
  // TITLE_CONTENT: 'TITLE_CONTENT',
  // MUTE_ERROR: 'MUTE_ERROR',
};

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function fetchListings() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/listings`).then(response => {
      // do something with response.data  (some json)
      dispatch({ type: ActionTypes.FETCH_LISTINGS, payload: response.data });
      console.log('successfully got listings');
      console.log(response.data);
    }).catch(error => {
      // hit an error do something else!
      console.log('Error fetching listings!');
      console.log(error);
    });
  };
}

// export function fetchListing(id) {
//   return (dispatch) => {
//     axios.get(`${ROOT_URL}/listings/${id}`).then(response => {
//       // do something with response.data  (some json)
//       dispatch({ type: ActionTypes.FETCH_LISTING, payload: response.data });
//       console.log('fetched post successfully!');
//       console.log(response.data);
//     }).catch(error => {
//       // hit an error do something else!
//       console.log('Error fetching post!');
//     });
//   };
//  // can now dispatch stuff
// }

export function updateListing(listing) {
  return (dispatch) => {
    const fields = { location_id: listing.location_id, start_time: listing.start_time, num_looking_for_game: listing.num_looking_for_game };
    axios.put(`${ROOT_URL}/listings/${listing.id}${API_KEY}`, fields).then(response => {
      dispatch({ type: ActionTypes.UPDATE_LISTING, payload: response.data });
      location.reload();
    });
  };
}

// export function displayErrorIncomplete() {
//   return (dispatch) => {
//     dispatch({ type: ActionTypes.INCOMPLETE });
//   };
// }
//
// export function displayErrorMismatch() {
//   return (dispatch) => {
//     dispatch({ type: ActionTypes.PASS_MISMATCH });
//   };
// }
//
// export function displayErrorNew() {
//   return (dispatch) => {
//     dispatch({ type: ActionTypes.TITLE_CONTENT });
//   };
// }
//
// export function muteError() {
//   return (dispatch) => {
//     dispatch({ type: ActionTypes.MUTE_ERROR });
//   };
// }

export function createListing(listing) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/listings/${API_KEY}`, listing).then(response => {
      console.log('successfully made listing!');
      browserHistory.push('/');
    }).catch(error => {
      console.log('error creating listing');
    });
  };
}

export function deleteListing(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/listings/${id}${API_KEY}`).then(response => {
      browserHistory.push('/');
    });
  };
}

export function signinUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return (dispatch) => {
    const fields = { email, password };
    axios.post(`${ROOT_URL}/signin`, fields).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch({ type: ActionTypes.BAD_CREDS });
    });
  };
}


export function signupUser({ email, username, password, passwordConfirm }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    const fields = { email, username, password, passwordConfirm };
    axios.post(`${ROOT_URL}/signup`, fields).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/welcome');
    }).catch(error => {
      dispatch({ type: ActionTypes.EXISTED });
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}

export function getLocations() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/locations`).then(response => {
      console.log('locations');
      console.log(response.data);
      // do something with response.data  (some json)
      dispatch({ type: ActionTypes.FETCH_LOCATIONS, payload: response.data });
      console.log('successfully got locs');
    }).catch(error => {
      // hit an error do something else!
      console.log('Error fetching locations!');
    });
  };
}
