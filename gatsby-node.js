const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const itemDescriptionTemplate = path.resolve(
    "./src/templates/itemDescription.js"
  )
  const res = await graphql(`
    query {
      products {
        products {
          id
          name
        }
      }
    }
  `)

  res.data.products.products.forEach(product => {
    createPage({
      component: itemDescriptionTemplate,
      path: `/${product.name}`,
      context: { myId: product.id },
    })

    console.log(product.productName)
  })
}
