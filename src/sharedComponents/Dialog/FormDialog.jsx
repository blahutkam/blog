import React, { useState } from "react";

import { Box, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// /import PostForm from "../PostForm.component";
import { useForm } from "react-hook-form";
import { Form } from "../Form.component";
import { appInit, firestore } from "../../firebase/firebase.utils";
import Today from "../../utility/Today.component";

export default function FormDialog() {
  //new post inputs
  const [valueTitle, setValueTitle] = useState("");
  const [valueTeaser, setValueTeaser] = useState("");
  const [valueArticle, setValueArticle] = useState("");
  const [imageUrl, setImageUrl] = useState();

  //open/close dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit } = useForm();

  const onFileChange = async (e) => {
    // image upload onChange
    const image = e.target.files[0];
    const storageRef = appInit.storage().ref();
    const fileRef = storageRef.child(image.name);
    await fileRef.put(image).then(() => {
      console.log(image, "uploaded");
    });
    setImageUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = (e) => {
    //when click submit form doesnt trigger navigation
    // e.preventDefault();

    //image uploaod onSubmit
    // const storageRef = appInit.storage().ref();
    // const fileRef = storageRef.child(data.postImage[0].name);
    // //do something when image is uploaded
    // fileRef.put(data.postImage[0]).then(() => {
    //   console.log("file uploaded");
    // });

    //post onSubmit
    firestore
      .collection("posts")
      .add({
        title: valueTitle,
        teaser: valueTeaser,
        article: valueArticle,
        image: imageUrl,
        date: Today,
      })
      // .set({
      //   // title: valueTitle,
      //   image: imageUrl,
      // })
      .then(() => alert("article posted"));

    //remove inserted values after submit
    setValueTitle("");
    setValueTeaser("");
    setValueArticle("");

    //close dialog
    setOpen(false);
  };

  return (
    <>
      <Box mb={4}>
        <Button color="primary" onClick={handleClickOpen}>
          + New Post
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="form-dialog-title"
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="form-dialog-title">New Post Form</DialogTitle>
          <DialogContent>
            <Box mb={8}>
              <Box mb={2}>
                <input
                  required
                  ref={register}
                  type="file"
                  name="postImage"
                  onChange={onFileChange}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  required
                  ref={register}
                  name="postTitle"
                  label="Title"
                  variant="outlined"
                  value={valueTitle}
                  onChange={(e) => setValueTitle(e.target.value)}
                  fullWidth
                  //placeholder="Add a post title..."
                />
              </Box>
              <Box mb={2}>
                <TextField
                  required
                  ref={register}
                  name="postTeaser"
                  label="Teaser"
                  multiline
                  variant="outlined"
                  value={valueTeaser}
                  onChange={(e) => setValueTeaser(e.target.value)}
                  fullWidth
                  rows={2}
                  //placeholder="Add a teaser..."
                />
              </Box>
              <Box mb={2}>
                <TextField
                  required
                  ref={register}
                  name="postText"
                  label="Article"
                  multiline
                  variant="outlined"
                  value={valueArticle}
                  onChange={(e) => setValueArticle(e.target.value)}
                  fullWidth
                  rows={6}
                  //placeholder="Write an article..."
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </>
  );
}
