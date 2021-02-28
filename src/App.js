import React from "react";
import "./App.scss";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import AppBar from "./sharedComponents/AppBar.component";
import Hero from "./sharedComponents/Hero.component";
// import Post from "./pages/Post.page";
// import Blog from "./pages/Blog.page";
// import Sign from "./sharedComponents/Sign.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div>
        {/* redux */}
        <AppBar currentUser={this.state.currentUser} />
        <Hero />
        {/* <Blog /> */}
        {/* <Post /> */}
      </div>
    );
  }
}

export default App;
