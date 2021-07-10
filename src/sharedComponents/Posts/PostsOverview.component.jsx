import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectBlogPostsForPreview } from "../../redux/blog/blog.selectors";

import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../MediaCard.component";
import FormDialog from "../FormDialog";
import Hero from "../Hero.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const useStyles = makeStyles((theme) => ({
  blogContaneir: {
    paddingTop: theme.spacing(3),
    margin: "auto",
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
}));

const PostsOverview = ({ posts, user }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  console.log("fired");
  //console.log("posts", posts);
  //console.log(user);
  //console.log(posts[0].routeName);

  return (
    <>
      <Hero heading="Blog" />
      <Container maxWidth="lg" className={classes.blogContaneir}>
        {/* add new post */}
        {user !== null && user.email === "blahutkam@gmail.com" ? (
          <FormDialog />
        ) : null}

        <Grid container spacing={isSmall ? 2 : 8}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              {/* link with post auto generated firebase id */}
              <MediaCard
                postUrl={`/${post.routeName}`}
                index={index}
                post={post}
                style={{ height: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectBlogPostsForPreview,
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(PostsOverview);
