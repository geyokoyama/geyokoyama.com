import * as React from "react"
import { Link } from "gatsby"

const Post = ({ data }) => {
  return (
    <article key={ data.id }>
      <Link to={ `/blog/${ data.fields.slug }` } className="hover:text-teal-500 hover:underline focus:text-teal-500 focus:underline active:text-teal-900">
        <header className="flex flex-row gap-5 items-center justify-between">
          <h2 className="font-semibold text-2xl">
              { data.frontmatter.title }
          </h2>
          <p className="shrink-0 italic text-teal-500">{ data.frontmatter.date }</p>
        </header>
      </Link>
    </article>
  )
}

export default Post
