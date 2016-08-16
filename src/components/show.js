// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions';
// import Textarea from 'react-textarea-autosize';
//
// // example class based component (smart component)
// class Show extends Component {
//   constructor(props) {
//     super(props);
//
//     // init component state here
//     this.state = {
//       editing: false,
//     };
//
//     this.onEdit = this.onEdit.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.componentWillMount = this.componentWillMount.bind(this);
//   }
//
//   componentWillMount() {
//     this.props.fetchListing(this.props.params.id);
//   }
//
//   onEdit() {
//     this.setState({ editing: !this.state.editing });
//   }
//
//   onSubmit() {
//     this.setState({ editing: !this.state.editing });
//     const listing = {
//       location_id: this.state.location_id,
//       host_user_id: this.state.host_user_id,
//       num_looking_for_game: this.state.num_looking_for_game,
//       start_time: this.state.start_time,
//     };
//
//     this.props.updateListing(listing);
//   }
//
//   render() {
//     console.log(this.props.current);
//     if (!this.state.editing) {
//       return (
//         <div id="showcontainer">
//           <div id="show">
//             <div id="showtitle">
//               <h1> Need {this.props.current.num_looking_for_game} at at {this.props.current.start_time} at {this.props.current.location_id} </h1>
//               <div id="showtitleicons">
//                 <div id="editicon" onClick={this.onEdit}>Edit game</div>&nbsp;
//                 <div id="trash" onClick={() => { this.props.deleteListing(this.props.params.id); }} >Delete game</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div id="editcontainer">
//           <div id="edit">
//             <div id="titlebar">
//               <div><Textarea id="titletextarea" defaultValue={this.props.current.num_looking_for_game} onChange={(event) => this.setState({ num_looking_for_game: event.target.value })} /></div>
//               <div id="icons">
//                 <i id="checkicon" className="fa fa-check fa-2x" aria-hidden="true" onClick={this.onSubmit}></i>
//                 <i id="trashedit" onClick={() => { this.props.deleteListing(this.props.params.id); }} className="fa fa-trash fa-2x" aria-hidden="true"></i>
//               </div>
//             </div>
//             <div id="edittags"><Textarea id="textarea" defaultValue={this.props.current.start_time} onChange={(event) => this.setState({ start_time: event.target.value })} /></div>
//             <div id="editcontent"><Textarea id="textarea" defaultValue={this.props.current.location_id} onChange={(event) => this.setState({ location_id: event.target.value })} /></div>
//           </div>
//         </div>
//       );
//     }
//   }
// }
//
// const mapStateToProps = (state) => (
//   {
//     current: state.listings.current,
//   }
// );
//
// export default connect(mapStateToProps, actions)(Show);
