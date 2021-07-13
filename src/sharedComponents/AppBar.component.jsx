import React from "react";
//import { logo as MenuIcon } from "../media/logo.png";
import { connect } from "react-redux";
import { signInWithGoogle } from "../firebase/firebase.utils";
import { auth } from "../firebase/firebase.utils";

//import { setCurrentUser } from "../redux/user/user.actions";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Box,
  Button,
  IconButton,
  Menu,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { MenuItem } from "@material-ui/core";

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
  logo: {
    maxWidth: 200,
  },
}));

const ButtonAppBar = ({ currentUser }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img
            src="https://uploads-ssl.webflow.com/5f320faa3cb04c6cdbb3b731/5f322177d0a119133a244f27_Martin_Blahutka_logo-p-500.png"
            alt="logo"
            className={classes.logo}
          />
          <Box className={classes.title}></Box>

          {!isSmall && (
            <nav className="main-nav">
              <Link to="/" className="hyperlink">
                home
              </Link>
              <Link to="/blog" className="hyperlink">
                blog
              </Link>

              <Box display="flex">
                {currentUser ? (
                  <Tooltip title={currentUser.displayName}>
                    <IconButton
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                      onClick={() => auth.signOut()}
                    >
                      <AccountCircleIcon color="secondary" />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Log in to leave a comment">
                    <IconButton
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                      onClick={signInWithGoogle}
                    >
                      <AccountCircleIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
            </nav>
          )}

          {isSmall && (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {currentUser ? (
                  <MenuItem onClick={handleClose}>
                    <Button
                      className="dropdown-menu-button"
                      onClick={() => auth.signOut()}
                    >
                      {currentUser.displayName}
                      <AccountCircleIcon
                        className="menu-icon"
                        color="secondary"
                      />
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleClose}>
                    <Button
                      className="dropdown-menu-button"
                      onClick={signInWithGoogle}
                    >
                      {"Log in"}
                      <AccountCircleIcon className="menu-icon" />
                    </Button>
                  </MenuItem>
                )}
                <MenuItem onClick={handleClose}>
                  <Link to="/" className="hyperlink">
                    home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/blog" className="hyperlink">
                    blog
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

//state - top level root reducer
const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(ButtonAppBar);
