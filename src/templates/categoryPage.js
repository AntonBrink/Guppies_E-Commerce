import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import * as catPageStyles from "../styles/categorypage.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart"
import { FaEye } from "@react-icons/all-files/fa/FaEye"
import { Link } from "gatsby"

export const productData = graphql`
  query MyQuery($category: String!) {
    allGraphCmsProduct(filter: { category: { eq: $category } }) {
      edges {
        node {
          name
          category
          productPrice
          productImage {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

const categoryPage = data => {
  return (
    <Layout>
      <div>
        <h1 className={catPageStyles.categoryHeader}>
          {data.data.allGraphCmsProduct.edges[0].node.category}
        </h1>
        <div className={catPageStyles.productGrid}>
          {data.data.allGraphCmsProduct.edges.map(product => {
            if (product.node.productImage === null) {
              return (
                <article className={catPageStyles.product}>
                  <div className={catPageStyles.imgContainer}></div>
                  {product.node.name} <br />R{product.node.productPrice} <br />
                  <Link
                    to={`/` + product.node.name}
                    className={catPageStyles.viewBtn}
                  >
                    <span className={catPageStyles.viewIcon}>
                      <FaEye></FaEye>
                    </span>
                    View
                  </Link>
                  <button className={catPageStyles.cartBtn}>
                    <span className={catPageStyles.cartText}>
                      <FaShoppingCart></FaShoppingCart>
                    </span>
                    Add to cart
                  </button>
                </article>
              )
            }

            return (
              <article className={catPageStyles.product}>
                <div className={catPageStyles.imgContainer}>
                  <GatsbyImage
                    image={product.node.productImage.gatsbyImageData}
                    alt={product.node.name}
                  ></GatsbyImage>
                </div>
                <h2 className={catPageStyles.productName}>
                  {product.node.name}{" "}
                </h2>
                <h2 className={catPageStyles.productPrice}>
                  {" "}
                  R{product.node.productPrice}{" "}
                </h2>

                <br />
                <Link
                  to={`/${product.node.category}` + `/` + product.node.name}
                  className={catPageStyles.viewBtn}
                >
                  <span className={catPageStyles.viewIcon}>
                    <FaEye></FaEye>
                  </span>
                  View
                </Link>
                <button className={catPageStyles.cartBtn}>
                  <span className={catPageStyles.cartText}>
                    <FaShoppingCart></FaShoppingCart>
                  </span>
                  Add to cart
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default categoryPage
