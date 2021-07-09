import { useState } from "react";
import { Box, Button, Input, Typography } from "@material-ui/core";
import { firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { Now } from "../../utility/Today.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const CommentForm = ({ postId, user }) => {
  const [value, setValue] = useState("");

  let commentId = Date.now() + "_" + value.replace(" ", "_");
  if (commentId.length > 20) {
    commentId = commentId.substring(0, 20);
  }

  //submit when submit button
  const handleSubmit = (e) => {
    //when click submit form doesnt trigger navigation
    e.preventDefault();
    //addComment(value);
    firestore
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .doc(commentId)
      .set({
        dateAndTime: Now,
        timestamp: Date.now(),
        name: user.displayName,
        text: value,
      });
    // .then(
    //   () => alert("comment added")
    //  );

    //when comment added return imput to default values
    setValue("");
  };

  //return to default when cancel button
  const hideSection = (e) => {
    setValue("");
  };

  return (
    <>
      {user ? (
        <form>
          <Box mb={8}>
            <Box mb={2}>
              <Input
                name="Add comment input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
                underline="true"
                placeholder="Add a public comment..."
              />
            </Box>
            {value ? (
              <>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    variant="contained"
                    color="default"
                    onClick={hideSection}
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </>
            ) : null}
          </Box>
        </form>
      ) : (
        <Box
          mb={2}
          bgcolor="secondary.main"
          style={{ color: "#ffffff", padding: "10px", marginBottom: "40px" }}
        >
          <Typography>log in to leave a comment</Typography>
        </Box>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(CommentForm);
