import React from "react";
import Cliff from "../images/about/cliff.JPG"

const styles = {
  aboutImage: {
    height: 500,
    width: "100%",
    padding: 25,
  },
}

const About = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-7 col-md-12">
        <img style={styles.aboutImage} src={Cliff} alt="Me sitting on a cliff" />
      </div>
      <div className="col-lg-3">
        <h1>About Me</h1>
        <hr />
        <p> Howdy!</p>
        <p>
        My name is John. If I’m not coding, you can find me reading,
        taking photographs, drawing, painting, or surfing!
        I graduated with a concentration in finance from UNCW
        and decided to learn full stack web development through the University of Pennsylvania LPS Coding Bootcamp.
        Let’s connect!
  </p>
      </div>
    </div>
  </div>
);

export default About;
