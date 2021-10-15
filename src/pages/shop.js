// import React from "react"
// import Layout from "../components/layout"
// import { graphql } from "gatsby"
// import * as shopStyles from "../styles/shop.module.scss"
// import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart"
// import { FaEye } from "@react-icons/all-files/fa/FaEye"
// import { Link } from "gatsby"

// export const myquery = graphql`
//   query {
//     products {
//       products {
//         name
//         productPrice
//         category
//         productImage {
//           url
//         }
//       }
//     }
//   }
// `

// const Shop = ({ data }) => {
//   return (
//     <Layout>
//       <div className={shopStyles.productGrid}>
//         {data.products.products.map(product => {
//           if (product.productImage === null) {
//             return (
//               <article className={shopStyles.product}>
//                 <div className={shopStyles.imgContainer}></div>
//                 {product.name} <br />R{product.productPrice} <br />
//                 <Link to={`/` + product.name} className={shopStyles.viewBtn}>
//                   <span className={shopStyles.viewIcon}>
//                     <FaEye></FaEye>
//                   </span>
//                   View
//                 </Link>
//                 <button className={shopStyles.cartBtn}>
//                   <span className={shopStyles.cartText}>
//                     <FaShoppingCart></FaShoppingCart>
//                   </span>
//                   Add to cart
//                 </button>
//               </article>
//             )
//           }

//           return (
//             <article className={shopStyles.product}>
//               <div className={shopStyles.imgContainer}>
//                 <img
//                   src={product.productImage.url}
//                   alt={product.name}
//                   width="100%"
//                   height="auto"
//                 />
//               </div>
//               {product.name} <br />R{product.productPrice} <br />
//               <Link to={`/` + product.name} className={shopStyles.viewBtn}>
//                 <span className={shopStyles.viewIcon}>
//                   <FaEye></FaEye>
//                 </span>
//                 View
//               </Link>
//               <button className={shopStyles.cartBtn}>
//                 <span className={shopStyles.cartText}>
//                   <FaShoppingCart></FaShoppingCart>
//                 </span>
//                 Add to cart
//               </button>
//             </article>
//           )
//         })}
//       </div>
//     </Layout>
//   )
// }

// export default Shop
