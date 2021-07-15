import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import * as homeStyles from "../styles/home.module.scss"

const Homepage = () => {
  return (
    <Layout>
      <img src="" alt="" width="1920" height="400" />
      <div>
        <h1 className={homeStyles.categoryHeader}>Categories</h1>

        <div className={homeStyles.categoryPanels}>
          <Link className={homeStyles.categoryPanel}>All</Link>
          <Link className={homeStyles.categoryPanel}>Fish</Link>
          <Link className={homeStyles.categoryPanel}>Plants</Link>
          <Link className={homeStyles.categoryPanel}>Food</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
