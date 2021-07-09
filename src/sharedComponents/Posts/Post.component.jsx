import { Fragment } from "react";
import { selectPost } from "../../redux/blog/blog.selectors";
import { connect } from "react-redux";

import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import CommentSection from "../Comments/CommentSection.component";
import { useTheme } from "@material-ui/core/styles";
import Hero from "../Hero.component";
import { Link } from "react-router-dom";

import PostsOverviewAside from "./PostsOverviewAside.component";

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

const Post = ({ post }) => {
  //console.log(post);
  const { title, teaser, article, date, image, id } = post;
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Fragment>
      <Hero heading={title} teaser={teaser} image={image} postDate={date} />
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
            <Box mb={8}>
              <Link to="/blog">back</Link>
              <Typography
                variant="body1"
                className={classes.spacing1}
              ></Typography>
              <br />
              <Typography variant="body2">{article}</Typography>
            </Box>

            {!isSmall && <CommentSection postId={id} />}
          </Grid>
          <Grid item xs={12} md={4} style={{ marginBottom: "30px" }}>
            <Box>
              <PostsOverviewAside postId={id} />
            </Box>
          </Grid>
        </Grid>
        {isSmall && <CommentSection postId={id} />}
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  post: selectPost(ownProps.match.params.postId)(state),
});

export default connect(mapStateToProps)(Post);
