import * as React from "react"

import config from '../../utils/config'

const Blog = ({ data }) => {

  return (
    <article className="article">
      <div className="container">
        <header className="article__header">
          <h1 className="article__header--title">Blog.</h1>
          <div className="article__header--summary">
            <p>Toughts, Learnings & Ramblings</p>
          </div>
        </header>
        <div className="article__content">
          Posts go here.
        </div>
      </div>
    </article>
  )
}

export const Head = () => <title>Blog | { config.siteTitle }</title>

export default Blog

