import React, { Fragment } from "react";
import Hero from "../sharedComponents/Hero.component";
import PostsPreview from "../sharedComponents/PostsPreview.component";

const Blog = () => {
  return (
    <Fragment>
      <Hero heading="Blog" />
      <PostsPreview />
    </Fragment>
  );
};

export default Blog;
