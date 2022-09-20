import * as React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import MDXComponents from "../components/MDXComponents"
import Seo from "../components/SEO"

const Post = ({ data: { mdx }, children }) => {
  const post = mdx

  return (
    <article>
      <header className="text-teal-50 bg-gradient-to-tr from-teal-900 to-teal-500">
        <div className="px-3 py-10 max-w-screen-xl m-auto relative">
          <div className="z-20 relative">
            <h1 className="text-3xl md:text-6xl font-semibold pb-5 md:pb-8">{ post.frontmatter.title }</h1>
            { post.frontmatter.date && <p className="text-xl md:text-3xl pb-3 md:pb-6">Updated on { post.frontmatter.date }</p> }
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
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        title
      }
    }
  }
`

export default Post

export const Head = ({
  data: {
    mdx: {
      frontmatter: {
        title
      }
    }
  }
}) => <Seo pageTitle={ title } />
