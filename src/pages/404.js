import * as React from "react"

import Seo from "../components/SEO"

const NotFoundPage = () => {
  return (
    <article>
      <div className="container">
        <div className="prose">
          <header className="article__header">
            <h1 className="article__header--title">
              404: Not Found
            </h1>
          </header>
        </div>
      </div>
    </article>
  )
}

export default NotFoundPage

export const Head = () => <Seo pageTitle="Not Found" />
