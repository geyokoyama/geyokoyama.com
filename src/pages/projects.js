import * as React from "react"

import projects from "../data/projects"

import Seo from "../components/SEO"
import ProjectCard from "../components/ProjectCard"

const Projects = ({ data }) => {
  return (
    <article className="article">
      <div className="container">
        <header className="article__header">
          <h1 className="article__header--title">Projects.</h1>
          <div className="article__header--summary">
            <p>Curated collection of personal projects.</p>
          </div>
        </header>
        <div className="article__content project-list">
          {
            projects.map(project =>
              <ProjectCard key={ project.slug } data={ project } />
            )
          }
        </div>
      </div>
    </article>
  )
}

export default Projects

export const Head = () => <Seo pageTitle="Projects" />

