//Reselect is a simple selector library
//aimed at reducing the amount of unnecessary
//calculations that occur after Redux state changes

import { createSelector } from "reselect";

const selectComments = (state) => state.postComments;

const selectPostComments = createSelector(
  [selectComments],
  (postComments) => postComments.comments
);

export const selectPostCommentsForPreview = createSelector(
  [selectPostComments],
  (comments) =>
    comments ? Object.keys(comments).map((key) => comments[key]) : []
);

export const selectIsPostFetching = createSelector(
  [selectComments],
  (postComments) => postComments.isFetching
);
