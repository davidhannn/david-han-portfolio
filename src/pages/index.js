import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
import SocialLinks from "../constants/socialLinks"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title="Home" description="This is our home page" />
      <Hero />
      <Skills />
      <Projects projects={projects} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { Featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
