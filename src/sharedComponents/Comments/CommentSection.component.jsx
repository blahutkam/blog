import { useState } from "react";
import { connect } from "react-redux";
//import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

import Comment from "./Comment.component";
import CommentForm from "./CommentForm.component";
import Today from "../../utility/Today.component";

const CommentSection = ({ currentUser }) => {
  //where does text come from??
  const addComment = (text) => {
    const name = currentUser.displayName;
    const date = Today;
    const newComments = [...comments, { text, name, date }];
    setComments(newComments);
  };

  // [current state, function that updates current state] = useState([default])
  const [comments, setComments] = useState([
    // {
    //   name: "Martin",
    //   date: "12/2/2021",
    //   text:
    //     "In the whole world I figure there ARE MORE GUNS THAN MUSICAL INSTRUMENTS. And it should be the other way around. Make love not war, make music not hate.",
    // },
    // {
    //   name: "Christy",
    //   date: "12/3/2021",
    //   text: "comment2",
    // },
    // {
    //   name: "Alma",
    //   date: "12/4/2021",
    //   text: "comment3",
    // },
  ]);

  return (
    <Box mb={10}>
      <Box mb={1}>
        <Typography variant="overline" gutterBottom>
          XX Comments
        </Typography>
      </Box>

      {currentUser ? (
        <CommentForm addComment={addComment} />
      ) : (
        <Box
          mb={2}
          bgcolor="secondary.main"
          style={{ color: "#ffffff", padding: "10px" }}
        >
          <Typography>log in to leave a comment</Typography>
        </Box>
      )}

      {comments.map((comment, index) => (
        <Comment key={index} index={index} comment={comment} />
      ))}
    </Box>
  );
};

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(CommentSection);
