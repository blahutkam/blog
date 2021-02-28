import React from "react";
import reactLogo from "../media/react.png";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const MediaCard = () => {
  const useStyles = makeStyles({
    media: {
      height: 140,
      minWidth: 200,
    },
    cardActionBox: {
      fontSize: "2rem",
      color: "#ffffff",
      width: "100%",
      height: "100%",
      margin: "0",
    },
    row: {
      display: "flex",
      flexDirection: "row",
    },
  });

  const classes = useStyles();

  //redux
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card>
      <CardActionArea>
        <Box className={isSmall ? classes.row : ""}>
          <CardMedia
            image={reactLogo}
            title="Live from space album cover"
            className={classes.media}
          />

          <CardContent>
            <Typography variant="h5" component="h2">
              Lizard King
            </Typography>
            <Typography gutterBottom component="p">
              2/22/2021
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>

          <Box
            bgcolor="secondary.main"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <CardActions>
              <Box className={classes.cardActionBox}>
                <Typography component="p">
                  {isSmall ? ">" : "...Go to article"}
                </Typography>
              </Box>
            </CardActions>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
