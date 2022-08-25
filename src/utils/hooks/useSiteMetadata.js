import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          siteUrl
          description
          internalLinks {
            name
            link
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
