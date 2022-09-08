import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

const Project = ({ data }) => {
  return (
    <article key={ data.id } className="project-card">
      <header className="project-card__header">
        <h2 className="project-card__header--title">
            <a href={ data.url } target="_blank" rel="noreferrer">
              { data.title }&nbsp;
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
        </h2>
      </header>
      <div className="project-card__body">
        <p>{ data.description }</p>
      </div>
      <div className="project-card__links">
      </div>
    </article>
  )
}

export default Project
