import React, { useState } from "react";

import { Box, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// /import PostForm from "../PostForm.component";
import { useForm } from "react-hook-form";
import { Form } from "./Form.component";
import { appInit, firestore } from "../firebase/firebase.utils";
import Today from "../utility/Today.component";

const FormDialog = () => {
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
    await fileRef.put(image).then(() => {});
    setImageUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = (e) => {
    //when click submit form doesnt trigger navigation
    //e.preventDefault();

    //post onSubmit
    firestore.collection("posts").doc(valueTitle).set({
      title: valueTitle,
      teaser: valueTeaser,
      article: valueArticle,
      image: imageUrl,
      date: Today,
      timestamp: Date.now(),
    });
    // .then(() => alert("article posted"));

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
                  //Add a post title
                  required
                  ref={register}
                  name="postTitle"
                  label="Title"
                  variant="outlined"
                  value={valueTitle}
                  onChange={(e) => setValueTitle(e.target.value)}
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <TextField
                  //Add a teaser
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
                />
              </Box>
              <Box mb={2}>
                <TextField
                  //Write an article
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
};

export default FormDialog;
