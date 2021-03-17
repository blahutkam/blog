import { useState } from "react";
import { Box, Button, Input } from "@material-ui/core";

const CommentForm = ({ addComment }) => {
  const [value, setValue] = useState("");

  //submit when submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(value);
    //when comment added return to default
    setValue("");
  };

  //return to default when cancel button
  const hideSection = (e) => {
    setValue("");
  };

  return (
    <form>
      <Box mb={8}>
        <Box mb={2}>
          <Input
            name="commentInput"
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
              <Button variant="contained" color="default" onClick={hideSection}>
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
  );
};

export default CommentForm;
