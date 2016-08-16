import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getLocations();
  }

  onSubmit(event) {
    console.log(this.state.num_looking_for_game);
    console.log(this.state.location_id);
    console.log(this.state.start_time);
    event.preventDefault();
    const listing = {
      location_id: this.state.location_id,
      host_user_id: this.state.host_user_id,
      num_looking_for_game: this.state.num_looking_for_game,
      start_time: this.state.start_time,
    };
    this.props.createListing(listing);
  }

  render() {
    let LocationsSelect = '';

    console.log('state is');
    console.log(this.state);
    console.log('props is');
    console.log(this.props);

    if (this.props.locations) {
      console.log('Locations is');
      console.log(this.props.locations);

      LocationsSelect = this.props.locations.map((location) =>
        <option value={location.location_id}>{location.location_name}</option>
      );
    }

    return (
      <div id="newcontainer">
        <div id="new">
          <h2>Create a New Game!</h2>
          <div id="createfields">
            &nbsp;&nbsp;I need&nbsp;&nbsp;<br /><br />
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <script>console.log(new Date().getTime());</script>
            &nbsp;&nbsp;to play at&nbsp;&nbsp;<br /><br />
            <select onChange={(event) => this.setState({ location_id: event.target.value })}>
              {LocationsSelect}
            </select>
            &nbsp;&nbsp;at&nbsp;&nbsp;<br /><br />
            <input type="text" placeholder="start time" id="tags" onChange={(event) => this.setState({ start_time: event.target.value })} />
          </div>
          <div id="submitbuttons">
            <div className="submitnew" onClick={this.onSubmit}>create!</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    locations: state.locations.locations,
  }
);

export default connect(mapStateToProps, actions)(New);
