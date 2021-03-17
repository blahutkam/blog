// import { useState } from "react";
// import { Box, Button, Input, TextField } from "@material-ui/core";
// import { useForm, useFormContext } from "react-hook-form";
// import { Form } from "./Form.component";
// import { useData } from "../context/DataContext";
// import { appInit } from "../firebase/firebase.utils";

// const PostForm = ({ addPost }) => {
//   const [valueTitle, setValueTitle] = useState("");
//   const [valueTeaser, setValueTeaser] = useState("");
//   const [valueArticle, setValueArticle] = useState("");

//   // const { data, setValues } = useData();
//   // const { control, handleSubmit } = useFormContext({
//   //   defaultValues: {
//   //     image: data.image,
//   //   },
//   // });

//   // //submit when submit button
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   addPost(value);
//   //   //when post added return to default
//   //   setValue("");
//   // };

//   // //return to default when cancel button
//   // const hideSection = (e) => {
//   //   setValue("");
//   // };

//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     //setValues(data);
//     const storageRef = appInit.storage().ref();
//     const fileRef = storageRef.child(data.postImage[0].name);
//     fileRef.put(data.postImage[0]).then(() => {
//       console.log("file uploaded");
//     });
//   };

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       <Box mb={8}>
//         <Box mb={2}>
//           <input required ref={register} type="file" name="postImage" />
//         </Box>
//         <Box mb={2}>
//           {/* <Button type="submit" fullWidth variant="contained" color="primary">
//             submit
//           </Button> */}
//         </Box>

//         <Box mb={2}>
//           <TextField
//             name="postTitle"
//             label="Title"
//             variant="outlined"
//             value={valueTitle}
//             onChange={(e) => setValueTitle(e.target.valueTitle)}
//             fullWidth
//             placeholder="Add a post title..."
//           />
//         </Box>
//         <Box mb={2}>
//           <TextField
//             name="postTeaser"
//             label="Teaser"
//             multiline
//             variant="outlined"
//             value={valueTeaser}
//             onChange={(e) => setValueTeaser(e.target.valueTeaser)}
//             fullWidth
//             rows={2}
//             placeholder="Add a teaser..."
//           />
//         </Box>
//         <Box mb={2}>
//           <TextField
//             name="postText"
//             label="Article"
//             multiline
//             variant="outlined"
//             value={valueArticle}
//             onChange={(e) => setValueArticle(e.target.valueArticle)}
//             fullWidth
//             rows={6}
//             placeholder="Write an article..."
//           />
//         </Box>
//       </Box>
//     </Form>
//   );
// };

// export default PostForm;
