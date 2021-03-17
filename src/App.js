import React, { Fragment } from "react";
import "./App.scss";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";

import { setCurrentUser } from "./redux/user/user.actions";

import AppBar from "./sharedComponents/AppBar.component";
import Home from "./pages/Home.page";
import Blog from "./pages/Blog.page";
import Post from "./pages/Post.page";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  // componentDidMount() {
  //   auth.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = createUserProfileDocument(userAuth);

  //       (await userRef).onSnapshot((snapShot) => {
  //         this.setState(
  //           {
  //             currentUser: {
  //               id: snapShot.id,
  //               ...snapShot.data(),
  //             },
  //           },
  //           () => {
  //             console.log(this.state);
  //           }
  //         );
  //       });
  //     }
  //     this.setState({ currentUser: userAuth });
  //   });
  // }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        {/* redux */}
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/post" component={Post} />
        </Switch>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  //dispatch - whatever object your passing is going to be an action object that i am going to pass to every reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
//firts parameter is null because we don't need mapStateToProps
export default connect(null, mapDispatchToProps)(App);
