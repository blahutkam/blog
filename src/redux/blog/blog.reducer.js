import BlogActionTypes from "./blog.types";

const INITIAL_STATE = {
  posts: null,
  isFetching: false,
  errorMessage: undefined,
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case BlogActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isFetching: false,
      };
    case BlogActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default blogReducer;
