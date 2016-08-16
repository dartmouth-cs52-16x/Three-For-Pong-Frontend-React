import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class Listings extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchListings();
  }

  render() {
    console.log('listings is');
    console.log(this.props.listings);

    let listingsContainer = '';

    if (this.props.listings) {
      listingsContainer = this.props.listings.map((listing) =>
        <div id="post">
          <div id="postinfo">Need {listing.num_still_needed_for_game} at {listing.location_id} at {listing.start_time} </div>
        </div>
      );
    }

    return (
      <div id="postscontainer">
        <div id="posts">
          {listingsContainer}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    listings: state.listings.listings,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
export default connect(mapStateToProps, actions)(Listings);
