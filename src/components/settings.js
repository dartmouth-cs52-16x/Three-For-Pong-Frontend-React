import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';

// example class based component (smart component)
class Settings extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      editing: false,
    };

    this.onEdit = this.onEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.id);
  }

  onEdit() {
    this.setState({ editing: !this.state.editing });
  }

  onSubmit() {
    this.setState({ editing: !this.state.editing });
    const user = {
      full_name: this.state.full_name,
      phone: this.state.phone,
      can_host: this.state.can_host,
      default_location_id: this.state.default_location_id,
    };

    this.props.updateUser(user);
  }

  render() {
    console.log(this.props.current);
    if (!this.state.editing) {
      return (
        <div id="showcontainer">
          <div id="show">
            <div id="showtitle">
              <h1> {this.props.current.title} </h1>
              <div id="showtitleicons">
                <i id="editicon" className="fa fa-pencil fa-2x" aria-hidden="true" onClick={this.onEdit}></i>&nbsp;
                <i id="trash" onClick={() => { this.props.deletePost(this.props.params.id); }} className="fa fa-trash fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <h4> by {this.props.current.author} </h4>
            <h5> tags: {this.props.current.tags} </h5>
            <div id="postcontent" dangerouslySetInnerHTML={{ __html: marked(this.props.current.content || '') }} />
          </div>
        </div>
      );
    } else {
      return (
        <div id="editcontainer">
          <div id="edit">
            <div id="titlebar">
              <div>Edit title: <Textarea id="titletextarea" defaultValue={this.props.current.title} onChange={(event) => this.setState({ title: event.target.value })} /></div>
              <div id="icons">
                <i id="checkicon" className="fa fa-check fa-2x" aria-hidden="true" onClick={this.onSubmit}></i>
                <i id="trashedit" onClick={() => { this.props.deletePost(this.props.params.id); }} className="fa fa-trash fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <div id="edittags">Edit tags: <Textarea id="textarea" defaultValue={this.props.current.tags} onChange={(event) => this.setState({ tags: event.target.value })} /></div>
            <div id="editcontent">Edit content: <Textarea id="textarea" defaultValue={this.props.current.content} onChange={(event) => this.setState({ content: event.target.value })} /></div>
            <br />
            <div>Post Preview (hint: change content to display below!):</div>
            <br />
            <div id="editpreviewcontent" dangerouslySetInnerHTML={{ __html: marked(event.target.value || '') }} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    current: state.posts.current,
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, actions)(Settings);
