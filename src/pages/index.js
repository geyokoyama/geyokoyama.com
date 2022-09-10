import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserAstronaut, faClipboard, faProjectDiagram, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

import Seo from "../components/SEO"
import Online from "../components/Online"
import ProjectCard from "../components/ProjectCard"

import projects from "../data/projects"
import image_src from '../assets/santa_cruz_img.jpg'

const Index = () => {
  return (
    <article>
      <header
        className="flex justify-center items-center min-h-[80vh] bg-fixed bg-cover bg-center bg-no-repeat"
        style={{backgroundImage:`linear-gradient(to top right, rgba(19, 78, 74, 1), rgba(20, 184, 166, 0.6)), url(${image_src})`}}
      >
        <div className="max-w-screen-sm text-teal-50 p-3">
          <div className="text-lg md:text-2xl">Hey there,</div>
          <h1 className="text-5xl md:text-8xl font-bold">I'm George.</h1>
          <hr className="my-6" />
          <div className="text-xl md:text-2xl">
            <p>I'm a software developer based in Dublin, CA specialized in Ruby on Rails applications.</p>
          </div>
        </div>
      </header>
      <section className="max-w-screen-xl m-auto">
        <div className="px-3 py-10">
          <h2 className="text-5xl md:text-7xl font-semibold py-3 md:py-6"><FontAwesomeIcon icon={faUserAstronaut} />&nbsp;About</h2>
          <div className="py-3 md:py-6 overflow-hidden">
            <figure className="w-fit m-auto py-5 md:float-left md:pt-0 md:pr-5 md:pb-5">
              <StaticImage
                className="max-w-[337px]"
                alt="Profile picture"
                src="../assets/profile_pic.png"
              />
            </figure>
            <div>
              <p className="py-3">Hello there! Welcome to the website of George Yokoyama. A Japanese speaking, tutorial watching, web novel reading, PC gaming web developer currently based in Dublin, California.</p>
              <p className="py-3">My motivation for this website is to have place to share what I've learned and to document my thoughts. It's built with <a href="https://www.gatsbyjs.com/" className="underline hover:text-teal-500 focus:text-teal-500 active:text-teal-900">Gatsby</a>, deployed on <a href="https://www.netlify.com/" className="underline hover:text-teal-500 focus:text-teal-500 active:text-teal-900">Netlify</a>, and the code for this site is available <a href="https://www.github.com/geyokoyama/geyokoyama.com" className="underline hover:text-teal-500 focus:text-teal-500 active:text-teal-900">here</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl m-auto">
        <div className="px-3 py-10">
          <h2 className="text-5xl md:text-7xl font-semibold py-3 md:py-6"><FontAwesomeIcon icon={faClipboard} />&nbsp;Miscellaneous</h2>
          <div className="py-3 md:py-6">
            <Link to="/resume" className="underline hover:text-teal-500 focus:text-teal-500 focus:text-teal-500 active:text-teal-900">Résumé</Link>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl m-auto">
        <div className="px-3 py-10">
          <h2 className="text-5xl md:text-7xl font-semibold py-3 md:py-6"><FontAwesomeIcon icon={faProjectDiagram} />&nbsp;Projects</h2>
          <div className="py-3 md:py-6">
            <div className="grid gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {
                projects.map(project =>
                  <ProjectCard key={ project.slug } data={ project } />
                )
              }
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl m-auto">
        <div className="px-3 py-10">
          <h2 className="text-5xl md:text-7xl font-semibold py-3 md:py-6"><FontAwesomeIcon icon={faHandshakeAngle} />&nbsp;Contact</h2>
          <div className="py-3 md:py-6">
            <p>Want to get in touch? Send an email to <a href="mailto:george@geyokoyama.com" className="underline hover:text-teal-500 focus:text-teal-500 active:text-teal-900">george@geyokoyama.com</a> or connect with me on social media.</p>
          </div>
          <Online />
        </div>
      </section>
    </article>
  )
}

export default Index

export const Head = () => <Seo />
