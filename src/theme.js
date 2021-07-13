import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    //link cdn in index.html
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  pallete: {
    primary: {
      main: "#000",
    },
  },
  background: {
    default: "#fff",
  },
  body: {
    margin: "0px",
  },
});

export default theme;
