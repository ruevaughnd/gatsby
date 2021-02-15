const { createFilePath } = require(`gatsby/utils`)

exports.onCreateNode = arg => {
  const { node, getNode } = arg
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    arg.boundActionCreators.createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}