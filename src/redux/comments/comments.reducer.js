import CommentsActionTypes from "./comments.types";

const INITIAL_STATE = {
  comments: null,
  isFetching: false,
  errorMessage: undefined,
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  //console.log("payload", action.payload);

  switch (action.type) {
    case CommentsActionTypes.FETCH_COMMENTS_START:
      return {
        ...state,
        comments: action.payload,
        isFetching: true,
      };
    case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        comments: action.payload,
      };
    case CommentsActionTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer;
