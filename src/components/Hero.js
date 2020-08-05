import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import lottie from "lottie-web"
import Typical from "react-typical"
import animation from "../animations/computer-animation.json"
import FacebookIcon from "../assets/facebook.svg"
import InstagramIcon from "../assets/instagram.svg"
import GithubIcon from "../assets/github.svg"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  let animationContainer = React.createRef()

  React.useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
      // loop: true,
    })
  }, [])

  return (
    <header className="hero-container">
      <div className="hero-main-left">
        <div className="hero-name">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["> Hi, I'm David Han", 1000]}
          />
        </div>
        <div className="hero-description">
          <p>
            An aspiring self taught Front End web developer currently residing
            in the Bay Area.
          </p>
        </div>
        <div className="hero-social-media-icons">
          <FacebookIcon />
          <InstagramIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="hero-main-right">
        <div className="hero-computer" ref={animationContainer} />
      </div>

      {/* <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm David</h1>
          <h4>Self Taught Web Developer</h4>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
          <SocialLinks />
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div> */}
    </header>
  )
}

export default Hero
