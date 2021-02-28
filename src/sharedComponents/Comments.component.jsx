import { Box, Input, Typography } from "@material-ui/core";
import React from "react";

const Comments = () => {
  return (
    <>
      {/* <Divider variant="fullWidth" /> */}
      <Box mb={10}>
        <Box mb={1}>
          <Typography variant="overline" gutterBottom>
            XX Comments
          </Typography>
        </Box>
        <Box mb={8}>
          <Input fullWidth underline placeholder="Add a public comment..." />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography variant="overline">nick name</Typography>
          <Typography color="textSecondary" variant="overline">
            date
          </Typography>
        </Box>
        <Typography color="textPrimary" variant="body2">
          In the whole world I figure there ARE MORE GUNS THAN MUSICAL
          INSTRUMENTS. And it should be the other way around. Make love not war,
          make music not hate.
        </Typography>
      </Box>
    </>
  );
};

export default Comments;
