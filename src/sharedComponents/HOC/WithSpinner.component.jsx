import React from "react";
import Spinner from "../Spinner.componnent";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    //console.log("isLoading inside with Spinner", isLoading);
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default WithSpinner;
