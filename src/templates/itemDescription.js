import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import * as itemStyles from "../styles/item.module.scss"
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart"

export const productData = graphql`
  query ($myId: ID!) {
    products {
      product(where: { id: $myId }) {
        name
        productPrice
        category
        id
        description {
          markdown
        }
        productImage {
          url
        }
      }
    }
  }
`

const ItemDescription = data => {
  const [id] = useState(data.data.products.product.id)
  const [stock, setStock] = useState(0)
  useEffect(() => {
    const query = `
      query  {
          product(where: { id: "${id}" }) {
            stock
          
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

  if (data.data.products.product.productImage !== null) {
    return (
      <Layout>
        <div className={itemStyles.content}>
          <div className={itemStyles.leftDiv}>
            <img
              className={itemStyles.productImg}
              src={data.data.products.product.productImage.url}
              alt=""
            />
          </div>
          <div className={itemStyles.rightDiv}>
            <h1 className={itemStyles.itemTitle}>
              {data.data.products.product.name}
            </h1>
            <div className={itemStyles.priceCat}>
              <h2>R{data.data.products.product.productPrice}</h2>
              <h2>{data.data.products.product.category}</h2>
            </div>
            <p className={itemStyles.itemDescription}>
              {data.data.products.product.description.markdown}
            </p>
            <p>Stock: {stock}</p>
            <button className={itemStyles.cartBtn}>
              <span className={itemStyles.cartText}>
                <FaShoppingCart></FaShoppingCart>
              </span>
              Add to cart
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={itemStyles.leftDiv}></div>
      <h1 className={itemStyles.itemTitle}>
        {data.data.products.product.name}
      </h1>
      <div className={itemStyles.priceCat}>
        <h2>R{data.data.products.product.productPrice}</h2>
        <h2>{data.data.products.product.category}</h2>
      </div>
      <p className={itemStyles.itemDescription}>
        {data.data.products.product.description.markdown}
      </p>
      <p>Stock: {stock}</p>

      <button className={itemStyles.cartBtn}>
        <span className={itemStyles.cartText}>
          <FaShoppingCart></FaShoppingCart>
        </span>
        Add to cart
      </button>
    </Layout>
  )
}

export default ItemDescription
