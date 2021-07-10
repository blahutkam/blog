import {
  convertPostsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import BlogActionTypes from "./blog.types";

export const fetchPostsStart = () => ({
  type: BlogActionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (postsMap) => ({
  type: BlogActionTypes.FETCH_POSTS_SUCCESS,
  payload: postsMap,
});

export const fetchPostsFailure = (errorMessage) => ({
  type: BlogActionTypes.FETCH_POSTS_FAILURE,
  payload: errorMessage,
});

export const fetchPostsStartAsync = () => {
  return (dispatch) => {
    const fetchPosts = () => {
      //console.log("fetchPosts");
      const PostsRef = firestore.collection("posts");

      dispatch(fetchPostsStart());

      PostsRef.orderBy("timestamp", "desc").onSnapshot(
        (snapshot) => {
          //console.log(snapshot);
          //convert fetched posts in firebase.util
          const postsMap = convertPostsSnapshotToMap(snapshot);
          //update blog reducer
          dispatch(fetchPostsSuccess(postsMap));
        },
        (error) => dispatch(fetchPostsFailure(error.message))
      );
    };
    fetchPosts();
  };
};
