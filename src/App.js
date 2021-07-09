import React, { Fragment } from "react";
import "./App.scss";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";

import { setCurrentUser } from "./redux/user/user.actions";

import AppBar from "./sharedComponents/AppBar.component";
import HomePage from "./pages/Home.page";
import BlogPage from "./pages/Blog.page";

class App extends React.Component {
  unsubscribeFromAuth = null;

  // rewrite to hook
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
          // console.log(snapShot.id);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog" component={BlogPage} />
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
