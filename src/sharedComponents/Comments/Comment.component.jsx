//import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography } from "@material-ui/core";

const Comment = ({ comment }) => {
  //console.log("comment", comment);
  const { name, dateAndTime, text } = comment;
  return (
    <Box mb={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        mb={1}
        p={1}
        bgcolor="text.secondary"
      >
        <Typography variant="overline">{name}</Typography>
        <Typography color="textSecondary" variant="overline">
          {dateAndTime}
        </Typography>
      </Box>
      <Typography color="textPrimary" variant="body2">
        {text}
      </Typography>
    </Box>
  );
};

export default Comment;
