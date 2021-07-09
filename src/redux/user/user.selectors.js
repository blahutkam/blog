//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15170424#questions
import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
