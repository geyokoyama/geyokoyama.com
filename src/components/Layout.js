import * as React from "react"

import Masthead from "./Masthead"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Masthead />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout
