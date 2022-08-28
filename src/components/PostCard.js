import * as React from "react"
import { Link } from "gatsby"

const Posts = ({ data }) => {
  return (
    <article key={ data.id } className="post-card">
      <Link to={ `/blog/${ data.slug }` }>
        <header className="post-card__header">
          <h2 className="post-card__header--title">
              { data.frontmatter.title }
          </h2>
          <p className="post-card__header--meta">{ data.frontmatter.date }</p>
        </header>
      </Link>
    </article>
  )
}

export default Posts

