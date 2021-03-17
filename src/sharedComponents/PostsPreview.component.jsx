import { useEffect, useState } from "react";

import { firestore } from "../firebase/firebase.utils";

import reactLogo from "../media/react.png";

import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "./MediaCard.component";
import FormDialog from "./Dialog/FormDialog";
import Today from "../utility/Today.component";

const PostsPreview = () => {
  const addPost = (text) => {
    const date = Today;
    const title = "Next Post";
    const image = reactLogo;
    const newPosts = [...posts, { date, text, title, image }];
    setPosts(newPosts);
  };
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

  const classes = useStyles();

  //redux?
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // [current state, function that updates current state] = useState([default])
  //const [error, setError] = useState([{ error: "" }]);
  const [posts, setPosts] = useState([]);

  // Use an effect to authenticate and load the posts from the database
  // useEffect(() => {
  //   firestore.collection("posts").onSnapshot((snapshot) => {
  //     const newPosts = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));

  //     setPosts(newPosts);
  //   });
  //   //array has to stay empty otherwise useEffect is going to run over and over again
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const newPosts = await firestore.collection("posts").get();
      setPosts(
        newPosts.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchPosts();
    //array has to stay empty otherwise useEffect is going to run over and over again
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.blogContaneir}>
        <FormDialog addPost={addPost} />
        <Grid container spacing={isSmall ? 2 : 8}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MediaCard
                linkUrl="/post"
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

export default PostsPreview;
