import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Masthead from "./Masthead"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <StaticQuery query={graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          title
          internalLinks {
            name
            link
          }
        }
      }
    }`}

    render={data => (
      <div className="layout">
        <Masthead siteTitle={ data.site.siteMetadata.title } internalLinks={ data.site.siteMetadata.internalLinks } />
        <main>
          { children }
        </main>
        <Footer />
      </div>
    )}
  />
)


export default Layout
