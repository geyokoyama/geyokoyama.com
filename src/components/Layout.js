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
    <div className="layout">
      <Masthead siteTitle={ title } internalLinks={ internalLinks } />
      <main>
        { children }
      </main>
      <Footer author={ author } internalLinks={ internalLinks } />
    </div>
  )
}

export default Layout
