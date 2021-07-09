import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectBlogPostsForPreview } from "../../redux/blog/blog.selectors";
import MediaCard from "../MediaCard.component";

const PostsOverviewAside = ({ postId, posts }) => {
  //console.log(posts[0].routeName);
  return (
    <>
      <Typography
        variant="h6"
        component="h3"
        //align="right"
        style={{ paddingLeft: "20px" }}
      >
        Latest Posts
      </Typography>
      {posts
        .filter((item, idx) => idx < 4)
        .filter((post) => post.id !== postId)
        .map((post, index) => (
          <Grid key={index} style={{ margin: "20px" }}>
            <MediaCard
              postUrl={`/${post.routeName}`}
              index={index}
              post={post}
              style={{ height: "100%" }}
            />
          </Grid>
        ))}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectBlogPostsForPreview,
});

export default connect(mapStateToProps)(PostsOverviewAside);
