import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav bg-dark nav-tabs justify-content-center">

    {/* Home Page */}
      <li className="nav-item ">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link text-white"}
        >
          Home
        </a>
      </li>

      {/* About Page */}
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link text-white"}
        >
          About
        </a>
      </li>
  
 
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => props.handlePageChange("Projects")}
          className={props.currentPage === "Projects" ? "nav-link active" : "nav-link text-white"}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#art"
          onClick={() => props.handlePageChange("Art")}
          className={props.currentPage === "Art" ? "nav-link active" : "nav-link text-white"}
        >
          Art 
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
