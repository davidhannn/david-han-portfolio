import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import GithubIcon from "../assets/github.svg"
import ExternalLinkIcon from "../assets/external-link.svg"
import Aos from "aos"
import "aos/dist/aos.css"

const Project = ({ description, title, github, stack, url, image, index }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  return (
    <article data-aos="fade-right" className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <GithubIcon />
          </a>
          <a href={github}>
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
