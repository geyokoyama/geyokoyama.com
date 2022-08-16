module.exports = {
  siteMetadata: {
    title: `George Yokoyama`,
    author: `George E Yokoyama`,
    pathPrefix: `/`,
    siteUrl: `https://www.geyokoyama.com`,
    description: `Ruby on Rails developer. This is my personal website.`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-images`,
        ]
      }
    },
  ],
}
