//Reselect is a simple selector library
//aimed at reducing the amount of unnecessary
//calculations that occur after Redux state changes

import { createSelector } from "reselect";

const selectBlog = (state) => state.blog;

const selectBlogPosts = createSelector([selectBlog], (blog) => blog.posts);

export const selectBlogPostsForPreview = createSelector(
  [selectBlogPosts],
  (posts) =>
    posts ? Object.keys(posts).map((key) => posts[key]) : "No posts yet"
);

export const selectPost = (postUrlParam) =>
  createSelector([selectBlogPosts], (posts) =>
    posts ? posts[postUrlParam] : null
  );

export const selectIsBlogFetching = createSelector(
  [selectBlog],
  (blog) => blog.isFetching
);

export const selectIsBlogLoaded = createSelector(
  [selectBlog],
  //!! returns boolean value
  (blog) => !!blog.posts
);
