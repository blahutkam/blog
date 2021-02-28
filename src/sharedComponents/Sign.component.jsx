import React, { Component } from "react";
import { Box, Button, Container, Input, Typography } from "@material-ui/core";

class Sign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <Container>
        <Typography variant="h5" component="h1">
          Sign in with Google
        </Typography>
        <Typography>use your email and password</Typography>

        <Box>
          <Input
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
            underline
            placeholder="Add a public comment..."
          />
        </Box>
        <Box>
          <Input
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.email}
            label="password"
            required
            underline
            placeholder="Add a public comment..."
          />
        </Box>
        <Button type="submit">sign in</Button>
        {/* <Button onClick={signInWithGoogle}>Sign in With Google</Button> */}
      </Container>
    );
  }
}

export default Sign;
