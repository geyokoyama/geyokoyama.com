import * as React from "react"

import { useSiteMetadata } from "../utils/hooks/useSiteMetadata"

import Masthead from "./Masthead"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const {
    title,
    author,
    internalLinks
  } = useSiteMetadata()

  return (
    <div className="flex flex-col min-h-screen text-lg bg-teal-50 text-teal-900">
      <Masthead siteTitle={ title } internalLinks={ internalLinks } />
      <main className="grow">
        { children }
      </main>
      <Footer author={ author } internalLinks={ internalLinks } />
    </div>
  )
}

export default Layout
