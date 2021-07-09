import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

const Hero = ({ heading, teaser, date, image }) => {
  const useStyles = makeStyles((theme) => ({
    hero: {
      color: "#fff",
      height: "300px",
      display: "flex",
      alignItems: "center",
      fontWeight: "300",
      fontSize: "2rem",
      marginBottom: "40px",
      backgroundColor: "#ddd",
      backgroundImage: "url(" + image + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));

  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      {/* <Box className={classes.overlay}> </Box> */}
      <Container>
        {heading ? <Typography variant="h1">{heading}</Typography> : null}

        {teaser ? <Typography>{teaser}</Typography> : null}

        {date ? (
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.date}
          >
            {date}
          </Typography>
        ) : null}
      </Container>
    </Box>
  );
};

export default Hero;
