import * as React from "react"
import { graphql } from "gatsby"

import config from '../../utils/config'

import PostCard from "../../components/PostCard"

const Blog = ({ data }) => {
  return (
    <article className="article">
      <div className="container">
        <header className="article__header">
          <h1 className="article__header--title">Blog.</h1>
          <div className="article__header--summary">
            <p>Toughts, Learnings & Ramblings</p>
          </div>
        </header>
        <div className="article__content">
          {
            data.allMdx.nodes.map(post =>
              <PostCard key={ post.id } data={ post } />
            )
          }
        </div>
      </div>
    </article>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC },
      filter: { fields: { collection: { eq: "posts" } }}
      ) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export const Head = () => <title>Blog | { config.siteTitle }</title>

export default Blog

