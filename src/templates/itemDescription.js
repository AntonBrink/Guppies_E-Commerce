import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const productData = graphql`
  query ($myId: ID!) {
    products {
      product(where: { id: $myId }) {
        name
      }
    }
  }
`

const ItemDescription = data => {
  return <h1>{data.data.products.product.name}</h1>
}

export default ItemDescription
