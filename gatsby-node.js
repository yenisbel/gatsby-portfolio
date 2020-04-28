const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if(node.internal.type === "MarkdownRemark"){
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      value: slug,
      name:"slug",
      node
    })
  } 
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve('./src/templates/project.js')
  const res = await graphql(`
    query{
      allMarkdownRemark {
        edges {
          node {
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: projectTemplate,
      path: `/project/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}
