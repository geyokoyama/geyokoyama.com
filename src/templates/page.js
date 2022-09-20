import * as React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { MDXProvider } from "@mdx-js/react"

import MDXComponents from "../components/MDXComponents"
import Seo from "../components/SEO"

const Page = ({ data: { mdx }, children }) => {
  const page = mdx

  return (
    <article>
      <header className="text-teal-50 bg-gradient-to-tr from-teal-900 to-teal-500">
        <div className="px-3 py-10 max-w-screen-xl m-auto relative">
          <div className="z-20 relative">
            <span className="absolute top-[-1.2rem] md:top-0 right-0 text-9xl text-teal-500 opacity-50 drop-shadow-md"><FontAwesomeIcon icon={faCircleUser} /></span>
            <h1 className="text-3xl md:text-6xl font-semibold pb-5 md:pb-8">{ page.frontmatter.title }</h1>
            { page.frontmatter.date && <p className="text-xl md:text-3xl pb-3 md:pb-6">Updated on { page.frontmatter.date }</p> }
          </div>
        </div>
      </header>
      <div className="max-w-screen-xl m-auto">
        <div className="px-3 py-10 max-w-prose m-auto md:text-xl">
          <MDXProvider components={ MDXComponents }>
            { children }
          </MDXProvider>
        </div>
      </div>
    </article>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        title
      }
    }
  }
`

export default Page

export const Head = ({
  data: {
    mdx: {
      frontmatter: {
        title
      }
    }
  }
}) => <Seo pageTitle={ title } />
