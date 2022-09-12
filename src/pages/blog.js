import * as React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'

import Seo from "../components/SEO"
import PostCard from "../components/PostCard"

const Blog = ({ data }) => {
  return (
    <article>
      <header className="px-3 py-10 text-teal-50 bg-gradient-to-tr from-teal-900 to-teal-500">
        <div className="max-w-screen-xl m-auto relative">
          <span className="absolute top-[-1.2rem] md:top-0 right-0 text-9xl text-teal-500 opacity-50 drop-shadow-md"><FontAwesomeIcon icon={faPenNib} /></span>
          <div className="z-20 relative">
            <h1 className="text-5xl md:text-8xl font-semibold pb-5 md:pb-8">Blog.</h1>
            <p className="text-xl md:text-3xl pb-3 md:pb-6">Toughts, Learnings & Ramblings</p>
          </div>
        </div>
      </header>
      <div className="max-w-screen-xl m-auto">
        <div className="px-3 py-10 max-w-screen-md m-auto grid gap-5">
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

export default Blog

export const Head = () => <Seo pageTitle="Blog" />
