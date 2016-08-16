import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navbar from './components/navbar';
import Index from './components/index';
import Listings from './components/listings';
import New from './components/new';
// import Show from './components/show';
import Settings from './components/settings';
// import RequireAuth from './components/require-auth';
import Signin from './components/signin';
import Signup from './components/signup';


export default(
  <Route path="/" component={Navbar}>
    <IndexRoute component={Index} />
    <Route path="/new" component={New} />
    <Route path="/settings" component={Settings} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route path="/listings" component={Listings} />
  </Route>
);
