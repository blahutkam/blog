import {
  convertCommentsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import CommentsActionTypes from "./comments.types";

export const fetchCommentsStart = () => ({
  type: CommentsActionTypes.FETCH_COMMENTS_START,
});

export const fetchCommentsSuccess = (commentsMap) => ({
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
  payload: commentsMap,
});

export const fetchCommentsFailure = (errorMessage) => ({
  type: CommentsActionTypes.FETCH_COMMENTS_FAILURE,
  payload: errorMessage,
});

export const fetchCommentsStartAsync = (postId) => {
  return (dispatch) => {
    const fetchComments = () => {
      const commentsRef = firestore
        .collection("posts")
        .doc(`${postId}`)
        .collection("comments");

      dispatch(fetchCommentsStart());

      commentsRef.orderBy("timestamp", "desc").onSnapshot(
        (snapshot) => {
          //console.log(snapshot);
          //convert fetched comments in firebase.util
          const commentsMap = convertCommentsSnapshotToMap(snapshot);
          //update comments reducer
          dispatch(fetchCommentsSuccess(commentsMap));
        },
        (error) => dispatch(fetchCommentsFailure(error.message))
      );
    };
    fetchComments();
  };
};
