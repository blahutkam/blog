import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

const Hero = () => {
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
        <Typography variant="h1">Ahoj</Typography>
        <Typography>...vitejte na </Typography>
        <Typography variant="h4" component="h2">
          Day xx - tohle jsem udelal
        </Typography>

        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.date}
        >
          2/22/2021
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
