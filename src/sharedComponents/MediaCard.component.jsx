import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { useHistory, withRouter } from "react-router-dom";

const MediaCard = ({ post, index, linkUrl, match }) => {
  const useStyles = makeStyles({
    media: {
      height: 160,
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
    fill: {
      width: "-webkit-fill-available",
    },
  });

  const classes = useStyles();

  //redux
  const theme = useTheme();
  //const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery(theme.breakpoints.only("sm"));

  const history = useHistory();

  return (
    <Card>
      {/* <CardActionArea onClick={() => history.push(`${match.url}${linkUrl}`)}> */}
      <CardActionArea onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <Box className={isSmall ? classes.row : ""}>
          <CardMedia
            image={post.image}
            title={post.title}
            className={classes.media}
          />

          <CardContent className={isSmall ? classes.fill : ""}>
            <Typography variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography gutterBottom component="p">
              {post.date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.teaser}
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

export default withRouter(MediaCard);
