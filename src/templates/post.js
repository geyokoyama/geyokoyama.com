import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "../components/SEO"

const Post = ({ data }) => {

  return (
    <article className="article">
      <div className="prose">
        <header className="article__header">
          <h1 className="article__header--title">{ data.mdx.frontmatter.title }</h1>
          { data.mdx.frontmatter.date && <p className="article__header--meta">Updated on { data.mdx.frontmatter.date }</p> }
        </header>
        <div className="article__content">
          <MDXRenderer>
            { data.mdx.body }
          </MDXRenderer>
        </div>
      </div>
    </article>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
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
