import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';

// example class based component (smart component)
class Signin extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.props.displayErrorIncomplete();
    } else {
      this.props.signinUser({ email: this.state.email, password: this.state.password });
    }
  }

  render() {
    return (
      <div id="newcontainer">
        <div id="new">
          <h2>Sign In</h2>
          <center><p>No account? <Link to="/signup">Sign up!</Link></p></center>
          <input type="text" placeholder="email" id="title" onChange={(event) => this.setState({ email: event.target.value })} />
          <input type="password" placeholder="password" id="tags" onChange={(event) => this.setState({ password: event.target.value })} />
          <div id="submitbuttons">
            <div id="subbutton" onClick={this.onSubmit}>Sign In</div>
          </div>
          <div id="error">
            <Error />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {}
);

export default connect(mapStateToProps, actions)(Signin);
