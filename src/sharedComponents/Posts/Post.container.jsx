import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import Post from "./Post.component";
import { selectIsBlogLoaded } from "../../redux/blog/blog.selectors";
import WithSpinner from "../HOC/WithSpinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsBlogLoaded(state),
});

const PostContainer = compose(connect(mapStateToProps), WithSpinner)(Post);

export default PostContainer;
