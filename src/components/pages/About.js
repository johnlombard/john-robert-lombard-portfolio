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
      <div className="col-lg-7">
        <img style={styles.aboutImage} src={Cliff} alt="Me sitting on a cliff" />
      </div>
      <div className="col-lg-3">
        <h1>About Me</h1>
        <hr/>
        <p>   </p>
      </div>
    </div>
  </div>
);

export default About;
