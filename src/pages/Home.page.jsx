import React from "react";
import Hero from "../sharedComponents/Hero.component";

const heroTextProps = {
  heading: "Home page",
  subHeading: "",
  note: "",
  postDate: "",
};

const HomePage = () => {
  return (
    <>
      <Hero {...heroTextProps} />
    </>
  );
};

export default HomePage;
