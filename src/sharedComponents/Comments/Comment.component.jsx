//import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography } from "@material-ui/core";

const Comment = ({ comment, index }) => {
  return (
    <Box mb={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        mb={1}
        p={1}
        bgcolor="text.secondary"
      >
        <Typography variant="overline">{comment.name}</Typography>
        <Typography color="textSecondary" variant="overline">
          {comment.date}
        </Typography>
      </Box>
      <Typography color="textPrimary" variant="body2">
        {comment.text}
      </Typography>
    </Box>
  );
};

export default Comment;
