import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import config from '../utils/config'

import Online from '../components/Online'

const Index = () => {
  return (
    <article>
      <div className="container">
        <header className="article__header">
          <h1 className="article__header--title">Hey there, I'm George.</h1>
          <div className="article__header--summary">
            <p>I'm a web developer who likes gaming, reading, and playing the violin.</p>
          </div>
          <StaticImage
            className="article__header--image"
            alt="Profile picture"
            src="../assets/profile pic.png"
          />
        </header>
        <div className="article__content">
          <section className="article__content__section">
            <h2>About</h2>
            <p>Hello there! Welcome to the website of George Yokoyama. A Japanese speaking, tutorial watching, web novel reading, PC gaming web developer currently based in Dublin, California.</p>
            <p>My motivation for this website is to have place to share what I've learned and to document my thoughts. It's built with <a href="https://www.gatsbyjs.com/">Gatsby</a>, deployed on <a href="https://www.netlify.com/">Netlify</a>, and the code for this site is available <a href="https://www.github.com/geyokoyama/geyokoyama.com">here</a>.</p>
          </section>
          <section className="article__content__section">
            <h2>Contact</h2>
            <p>Want to get in touch? Send an email to <a href="mailto:george@geyokoyama.com">george@geyokoyama.com</a> or connect with me on social media.</p>
            <Online />
          </section>
        </div>
      </div>
    </article>
  )
}

export default Index

export const Head = () => <title>{ config.siteTitle }</title>
