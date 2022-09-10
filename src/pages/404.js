import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/SEO"

const NotFoundPage = () => {
  return (
    <article>
      <header className="px-3 py-10 text-teal-50 bg-gradient-to-tr from-teal-900 to-teal-500">
        <div className="max-w-screen-xl m-auto relative">
          <span className="absolute top-0 right-0 text-9xl text-teal-500 opacity-50 drop-shadow-md">404</span>
          <div className="z-20 relative">
            <h1 className="text-5xl md:text-8xl font-semibold pb-5 md:pb-8">Oops!</h1>
            <p className="text-xl md:text-3xl pb-3 md:pb-6">The page you're looking for doesn't exist.</p>
          </div>
        </div>
      </header>
      <div className="max-w-screen-xl m-auto">
        <div className="px-3 py-10">
          <p className="text-3xl md:text-5xl">
            Sorry. <Link to="/" className="underline hover:text-teal-500 focus:text-teal-500 focus:text-teal-500 active:text-teal-900">Go to Homepage?</Link>
          </p>
        </div>
      </div>
    </article>
  )
}

export default NotFoundPage

export const Head = () => <Seo pageTitle="Not Found" />
