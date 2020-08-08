import React, { useEffect } from "react"
import Project from "./Project"

import Aos from "aos"
import "aos/dist/aos.css"

const Projects = ({ projects, showLink }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  return (
    <section className="section-projects">
      <h4 data-aos="fade-up">Projects</h4>
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
