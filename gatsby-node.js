const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const itemDescriptionTemplate = path.resolve(
    "./src/templates/itemDescription.js"
  )
  const itemCategoryTemplate = path.resolve("./src/templates/categoryPage.js")
  const res = await graphql(`
    query {
      allGraphCmsProduct {
        edges {
          node {
            name
            category
            remoteId
          }
        }
      }
    }
  `)
  let catArray = []

  res.data.allGraphCmsProduct.edges.forEach(product => {
    if (!catArray.includes(product.node.category)) {
      catArray.push(product.node.category)

      createPage({
        component: itemCategoryTemplate,
        path: `/${product.node.category}`,
        context: { category: product.node.category },
      })
    }

    createPage({
      component: itemDescriptionTemplate,
      path: `/${product.node.category}/${product.node.name}`,
      context: { myId: product.node.remoteId },
    })
  })

  // res.data.products.products.forEach(product => {

  // })
}
