import React from "react";
import Moss from "../images/home/moss.jpg"

const styles = {
  home: {
    position: "fixed",
    padding: 0,
    margin: 0,
    left: 0,
    backgroundImage: `url(${Moss})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },

  icons: {
    background: "transparent",
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.5em",
    letterSpacing: 10
  },
  centerContent: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textShadow: "2px 2px rgb(44, 39, 17)",
    letterSpacing: 3,
    
  }
};


const Home = () => (
  <div style={styles.home} >
    <div style={styles.centerContent} className="container justify-content-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6 col-md-8 align-items-center ">
          <h1 className="align-items-center" >John Robert Lombard</h1>
          <h5 className="align-center"  >Front End Developer</h5>
          <a className="align-center" style={styles.icons} href="https://github.com/johnlombard" rel="noopener noreferrer" className="fab fa-github" target="_blank"> </a>
          <a className="align-center" style={styles.icons} href="https://www.linkedin.com/in/johnlombard1996/" rel="noopener noreferrer" className="fab fa-linkedin" target="_blank"> </a>
          <a className="align-center" style={styles.icons} href="https://www.goodreads.com/user/show/60952740-john" rel="noopener noreferrer" className="fab fa-goodreads" target="_blank"> </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
