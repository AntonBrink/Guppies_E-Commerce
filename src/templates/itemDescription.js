import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import * as itemStyles from "../styles/item.module.scss"
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
export const productData = graphql`
  query ProductQuery($myId: ID!) {
    allGraphCmsProduct(filter: { remoteId: { eq: $myId } }) {
      edges {
        node {
          name
          category
          productPrice
          productImage {
            gatsbyImageData(placeholder: BLURRED)
          }
          description {
            markdown
          }
        }
      }
    }
  }
`

const ItemDescription = data => {
  console.log(data)

  const [id] = useState(data.data.allGraphCmsProduct.edges[0].node.id)
  const [stock, setStock] = useState(0)
  useEffect(() => {
    const query = `
       query {
    allGraphCmsProduct(filter: { id: { eq: "${id}" } }) {
      edges {
        node {
          stock
        }
      }
    }
  }



    `

    const url =
      "https://api-eu-central-1.graphcms.com/v2/ckr492jfn04bm01xl8ogz3x5z/master"
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    }

    fetch(url, opts)
      .then(res => res.json())
      .then(({ data }) => {
        setStock(data.product.stock)
      })
      .catch(console.error)
  }, [])

  if (data.data.allGraphCmsProduct.edges[0].node.productImage !== null) {
    return (
      <Layout>
        <div className={itemStyles.content}>
          <div className={itemStyles.leftDiv}>
            <GatsbyImage
              className={itemStyles.productImage}
              image={
                data.data.allGraphCmsProduct.edges[0].node.productImage
                  .gatsbyImageData
              }
              alt={data.data.allGraphCmsProduct.edges[0].node.name}
            ></GatsbyImage>
          </div>
          <div className={itemStyles.rightDiv}>
            <h1 className={itemStyles.itemTitle}>
              {data.data.allGraphCmsProduct.edges[0].node.name}
            </h1>
            <Link
              className={itemStyles.category}
              to={`/${data.data.allGraphCmsProduct.edges[0].node.category}`}
            >
              {data.data.allGraphCmsProduct.edges[0].node.category}
            </Link>

            <p className={itemStyles.itemDescription}>
              {data.data.allGraphCmsProduct.edges[0].node.description.markdown}
            </p>

            <h3>R{data.data.allGraphCmsProduct.edges[0].node.productPrice}</h3>

            <p className={itemStyles.stock}>Stock: {stock}</p>

            <div className={itemStyles.buttonContainer}>
              <button className={itemStyles.cartBtn}>
                <span className={itemStyles.cartText}>
                  <FaShoppingCart></FaShoppingCart>
                </span>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={itemStyles.content}>
        <div className={itemStyles.rightDiv}>
          <h1 className={itemStyles.itemTitle}>
            {data.data.allGraphCmsProduct.edges[0].node.name}
          </h1>
          <Link
            className={itemStyles.category}
            to={`/${data.data.allGraphCmsProduct.edges[0].node.category}`}
          >
            {data.data.allGraphCmsProduct.edges[0].node.category}
          </Link>

          <p className={itemStyles.itemDescription}>
            {data.data.allGraphCmsProduct.edges[0].node.description.markdown}
          </p>

          <h3>R{data.data.allGraphCmsProduct.edges[0].node.productPrice}</h3>

          <div className={itemStyles.buttonContainer}>
            <p className={itemStyles.stock}>Stock: {stock}</p>

            <button className={itemStyles.cartBtn}>
              <span className={itemStyles.cartText}>
                <FaShoppingCart></FaShoppingCart>
              </span>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ItemDescription
