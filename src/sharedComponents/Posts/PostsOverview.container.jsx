import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsBlogFetching } from "../../redux/blog/blog.selectors";
import WithSpinner from "../HOC/WithSpinner.component";
import PostsOverview from "./PostsOverview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsBlogFetching,
});

const PostsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PostsOverview);

export default PostsOverviewContainer;
