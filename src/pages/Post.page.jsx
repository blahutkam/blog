import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { Fragment } from "react";
import CommentSection from "../sharedComponents/Comments/CommentSection.component";
import MediaCard from "../sharedComponents/MediaCard.component";
import { useTheme } from "@material-ui/core/styles";
import Hero from "../sharedComponents/Hero.component";

const useStyles = makeStyles((theme) => ({
  date: {
    marginBottom: theme.spacing(8),
  },
  spacing1: {
    paddingBottom: theme.spacing(2),
  },
  spacing2: {
    paddingBottom: theme.spacing(8),
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Post = ({ currentUser, post }) => {
  const classes = useStyles();
  //redux
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Hero
        heading="Progress"
        note="...how did I build this blog"
        subHeading="day1"
        postDate="3/21/2021"
      />
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
            <Box mb={8}>
              <Typography variant="body1" className={classes.spacing1}>
                {/* {post.teaser} */}
              </Typography>
              <br />
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Box>
            {/* prop tunelling */}
            {!isSmall && <CommentSection currentUser={currentUser} />}
          </Grid>

          {/* <Grid item xs={12} md={4}>
          <Box mb={6}>
            <Box className={classes.alignRight} mb={2}>
              <MediaCard />
            </Box>
            <Box className={classes.alignRight} mb={2}>
              <MediaCard />
            </Box>
            <Box className={classes.alignRight} mb={2}>
              <MediaCard />
            </Box>
            <Box className={classes.alignRight} mb={2}>
              <MediaCard />
            </Box>
          </Box>
        </Grid> */}
        </Grid>

        {/* prop tunelling */}
        {isSmall && <CommentSection currentUser={currentUser} />}
      </Container>
    </Fragment>
  );
};

export default Post;
