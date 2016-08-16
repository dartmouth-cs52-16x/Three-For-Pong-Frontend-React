import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';

// example class based component (smart component)
class Navbar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};

    this.onCreate = this.onCreate.bind(this);
  }

  onCreate(event) {
    event.preventDefault();
    browserHistory.push('/new');
  }

  render() {
    return (
      <div>
        <div id="header">
          <Link to="/" id="name"><img id="logoimg" src="../../3forponglogo.png" alt="logo" /></Link>
          <div id="menu">
            <div className="signlinks">
              <Link to="/settings" className="signlink">
                <i className="fa fa-cog" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        {this.props.children}
        <div id="createfooter">
          <div id="creategame" onClick={this.onCreate}>create game</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {}
);

export default connect(mapStateToProps, actions)(Navbar);
