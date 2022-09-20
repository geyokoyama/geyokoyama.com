const path = require("path")
const slugify = require(`@sindresorhus/slugify`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("./src/templates/post.js")
  const pageTemplate = path.resolve("./src/templates/page.js")

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter{
            title
            date
          }
          body
          fields {
            collection
            slug
          }
          internal {
            contentFilePath
          }
          tableOfContents
        }

      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
    return
  }

  const all = result.data.allMdx.nodes

  const posts = all.filter(post => post.fields.collection === "posts")
  const pages = all.filter(page => page.fields.collection === "pages")

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

    createPage({
      path: `blog/${post.fields.slug}`,
      component:  `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
        previousPostId,
        nextPostId
      }
    })
  })

  pages.forEach((page, index) => {
    createPage({
      path: page.fields.slug,
      component: `${pageTemplate}?__contentFilePath=${page.internal.contentFilePath}`,
      context: {
        id: page.id,
      }
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;
    createNodeField({
      node,
      name: `collection`,
      value: collection,
    });
    createNodeField({
      node,
      name: `slug`,
      value: `${slugify(node.frontmatter.title)}`
    })
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
    }

    type Fields {
      collection: String
      slug: String
    }
  `)
}
