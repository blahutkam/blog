import React from "react";
import { connect } from "react-redux";
import { signInWithGoogle } from "../firebase/firebase.utils";
import { auth } from "../firebase/firebase.utils";

//import { setCurrentUser } from "../redux/user/user.actions";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = ({ currentUser }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            {currentUser
              ? "Welcome " + currentUser.displayName
              : "Sign in to leave a comment =>"}
          </Typography>

          <Link to="/">home</Link>
          <Link to="/blog">blog</Link>

          {currentUser ? (
            <Box display="flex">
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => auth.signOut()}
              >
                Sign out
              </Button>
            </Box>
          ) : (
            <Button
              color="inherit"
              variant="outlined"
              onClick={signInWithGoogle}
            >
              Sign in With Google
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

//state - top level root reducer
const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(ButtonAppBar);
