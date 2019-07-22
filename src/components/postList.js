import React, { Component } from "react";
import { fetchPostsAndUsers } from "../actions/index";
import { connect } from "react-redux";
import UserHeader from "./userHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    if (!this.props.posts) {
      return <div>Loading..</div>;
    }
    return (
      <div>
        <div style={{ height: "400px", width: "100%" }}>
          <object
            id="previewItem"
            data="https://edusanjal.com/media/brochure/redux-book.pdf#toolbar=0&scrollbar=0&navpanes=0&view=FitH"
            type="application/pdf"
            width="100%"
            height="100%"
            key="https://edusanjal.com/media/brochure/redux-book.pdf"
            aria-labelledby="Preview Item"
          />
        </div>
        <div className="ui relaxed divided list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  {
    fetchPostsAndUsers
  }
)(PostList);
