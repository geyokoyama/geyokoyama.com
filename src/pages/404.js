import * as React from "react"

import config from '../utils/config'

const NotFoundPage = () => {
  return (
    <article>
      <div className="container">
        <header className="article__header">
          <h1 className="article__header--title">
            404: Not Found
          </h1>
        </header>
      </div>
    </article>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found | { config.siteTitle }</title>
