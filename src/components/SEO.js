import * as React from "react"

import { useSiteMetadata } from "../utils/hooks/useSiteMetadata"

const Seo = ({ pageTitle, children }) => {
  const {
    title,
    author,
    description,
  } = useSiteMetadata();

  return (
    <>
      <title>{ (pageTitle ? `${ pageTitle } | ` : "") + title }</title>
      <meta name="description" content={ description } />
      <meta name="author" content={ author } />
      { children }
    </>
  )
}

export default Seo
