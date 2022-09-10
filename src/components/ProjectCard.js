import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Project = ({ data }) => {
  return (
    <article key={ data.id } className="shadow-md p-3 rounded flex flex-col gap-3">
      <h2 className="text-xl font-semibold">
        <a href={ data.repo } target="_blank" rel="noreferrer"
          className="block hover:underline hover:text-teal-500 focus:text-teal-500 focus:underline active:text-teal-900">
          { data.title }&nbsp;<FontAwesomeIcon icon={faGithub}/>
        </a>
      </h2>
      <p>{ data.description }</p>
      <div>
        {(
          data.demo &&
          <a href={ data.demo } target="_blank" rel="noreferrer" title="demo"
            className="p-1 text-sm font-semibold rounded border border-current hover:text-teal-500 focus:text-teal-500 active:text-teal-900">
            Demo&nbsp;<FontAwesomeIcon icon={faExternalLink}/>
          </a>
        )}
        {(
          data.article &&
          <a href={ data.article } target="_blank" rel="noreferrer" title="article"
            className="p-1 text-sm font-semibold rounded border border-current hover:text-teal-500 focus:text-teal-500 active:text-teal-900">
            Article&nbsp;<FontAwesomeIcon icon={faPenNib}/>
          </a>
        )}
      </div>
    </article>
  )
}

export default Project
