import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header"></div>
        <ul className="nav-links">
          <button onClick={() => scrollTo(".skills-container")}>
            <li>Skills</li>
          </button>

          <button onClick={() => scrollTo(".section-projects")}>
            <li>Projects</li>
          </button>
          <button onClick={() => scrollTo(".contact-form")}>
            <li>Contact</li>
          </button>
        </ul>

        {/* <PageLinks styleClass="nav-links"></PageLinks> */}
      </div>
    </nav>
  )
}

export default Navbar
