import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchPostsStartAsync } from "../redux/blog/blog.actions";

import PostContainer from "../sharedComponents/Posts/Post.container";

import PostsOverviewContainer from "../sharedComponents/Posts/PostsOverview.container";

//we have access to match because our blog page is being nested in route
//route outomatically passes match, history and location
//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15175184#overview

const BlogPage = ({ match, fetchPostsStartAsync }) => {
  //console.log(match);
  useEffect(() => {
    //fetch posts from firebase in blog actions
    fetchPostsStartAsync();
    //array has to stay empty otherwise useEffect is going to run over and over again
  }, [fetchPostsStartAsync]);

  return (
    <div>
      <Route exact path={`${match.path}`} component={PostsOverviewContainer} />
      <Route exact path={`${match.path}/:postId`} component={PostContainer} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostsStartAsync: () => dispatch(fetchPostsStartAsync()),
});

export default connect(null, mapDispatchToProps)(BlogPage);
