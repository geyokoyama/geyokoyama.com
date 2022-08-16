import * as React from "react"
import { Link } from "gatsby"

const Posts = ({ data }) => {
  return (
    <article key={ data.id } className="post-card">
      <header className="post-card__header">
        <h2 className="post-card__header--title">
          <Link to={ `/blog/${ data.slug }` }>
            { data.frontmatter.title }
          </Link>
        </h2>
        <p className="post-card__header--meta">{ data.frontmatter.date }</p>
      </header>
    </article>
  )
}

export default Posts

