import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../sharedComponents/MediaCard.component";

const Blog = () => {
  const useStyles = makeStyles((theme) => ({
    blogsContaneir: {
      paddingTop: theme.spacing(3),
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  //redux?
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="lg" className={classes.blogsContaneir}>
      <Grid container spacing={isSmall ? 2 : 8}>
        <Grid item xs={12} md={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <MediaCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
