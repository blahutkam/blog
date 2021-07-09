// import { connect } from "react-redux";
// import { compose } from "redux";
// import { createStructuredSelector } from "reselect";
// import WithSpinner from "../HOC/WithSpinner.component";
// import CommentSection from "./CommentSection.component";
// import { selectIsPostFetching } from "../../redux/comments/comments.selectors";
// import { useEffect } from "react";
// import { fetchCommentsStartAsync } from "../../redux/comments/comments.actions";

// const CommentSectionContainer = (postId) => {
//   useEffect(() => {
//     fetchCommentsStartAsync(postId);
//   }, []);
// };

// const mapStateToProps = createStructuredSelector({
//   isLoading: selectIsPostFetching,
// });

// export default connect(mapStateToProps)(WithSpinner(CommentSection));
