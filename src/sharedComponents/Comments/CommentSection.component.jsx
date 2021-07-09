import { useEffect } from "react";
import { connect } from "react-redux";
import {
  selectIsPostFetching,
  selectPostCommentsForPreview,
} from "../../redux/comments/comments.selectors";
import { fetchCommentsStartAsync } from "../../redux/comments/comments.actions";
import { createStructuredSelector } from "reselect";
import { Box, Typography } from "@material-ui/core";

import Comment from "./Comment.component";
import CommentForm from "./CommentForm.component";
//import WithSpinner from "../HOC/WithSpinner.component";

const CommentSection = ({
  postId,
  fetchCommentsStartAsync,
  comments,
  isLoading,
}) => {
  useEffect(() => {
    fetchCommentsStartAsync(postId);
  }, []);

  // console.log("isLoading", isLoading);
  // console.log("reduxComments", comments);

  return (
    <Box mb={10}>
      <CommentForm postId={postId} />

      <Box mb={1}>
        <Typography variant="overline" gutterBottom>
          {comments.length === 0
            ? "No Comments Yet"
            : comments.length === 1
            ? "1 comment"
            : comments.length + " comments"}
        </Typography>
      </Box>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsPostFetching,
  comments: selectPostCommentsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsStartAsync: (props) => dispatch(fetchCommentsStartAsync(props)),
});

//isLoading issue => missing container & withSpinner
export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
