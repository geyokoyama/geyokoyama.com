const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("./src/templates/post.js")
  const pageTemplate = path.resolve("./src/templates/page.js")

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter{
              title
              date
            }
            body
            fields {
              collection
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
    return
  }

  const all = result.data.allMdx.edges

  const posts = all.filter(post => post.node.fields.collection === "posts")
  const pages = all.filter(page => page.node.fields.collection === "pages")

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

    createPage({
      path: `blog/${post.node.slug}`,
      component: postTemplate,
      context: {
        id: post.node.id,
        previousPostId,
        nextPostId
      }
    })
  })

  pages.forEach((page, index) => {
    createPage({
      path: page.node.slug,
      component: pageTemplate,
      context: {
        id: page.node.id,
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
      name: 'collection',
      value: collection,
    });
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
    }
  `)
}
