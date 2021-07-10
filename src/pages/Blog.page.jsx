import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { fetchPostsStartAsync } from "../redux/blog/blog.actions";

import PostContainer from "../sharedComponents/Posts/Post.container";
import PostsOverviewContainer from "../sharedComponents/Posts/PostsOverview.container";

//we have access to match because our blog page is being nested in route
//route outomatically passes match, history and location
//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15175184#overview

const BlogPage = ({ fetchPostsStartAsync }) => {
  let { path } = useRouteMatch();

  useEffect(() => {
    //fetch posts from firebase in blog actions
    fetchPostsStartAsync();
    //console.log("fired");
    //array has to stay empty otherwise useEffect is going to run over and over again
  }, [fetchPostsStartAsync]);

  return (
    <div>
      <Switch>
        <Route exact path={path} component={PostsOverviewContainer} />
        <Route exact path={`${path}/:postId`} component={PostContainer} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostsStartAsync: () => dispatch(fetchPostsStartAsync()),
});

export default connect(null, mapDispatchToProps)(BlogPage);

//export default BlogPage;
