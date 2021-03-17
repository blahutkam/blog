import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

const Hero = ({ heading, subHeading, note, postDate }) => {
  const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundColor: "#bbb",
      color: "#fff",
      height: "300px",
      display: "flex",
      alignItems: "center",
      fontWeight: "300",
      fontSize: "2rem",
      marginBottom: "40px",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Container>
        {heading ? <Typography variant="h1">{heading}</Typography> : null}

        {note ? <Typography>{note}</Typography> : null}

        {subHeading ? (
          <Typography variant="h4" component="h2">
            {subHeading}
          </Typography>
        ) : null}

        {postDate ? (
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.date}
          >
            {postDate}
          </Typography>
        ) : null}
      </Container>
    </Box>
  );
};

export default Hero;
