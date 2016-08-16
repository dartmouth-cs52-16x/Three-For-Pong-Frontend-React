import React, { Component } from 'react';
import Listings from './listings';

// example class based component (smart component)
class Index extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <Listings />
        <div id="createfooter">
          <div id="creategame" onClick={this.onCreate}>create game</div>
        </div>
      </div>
    );
  }
}

export default Index;
