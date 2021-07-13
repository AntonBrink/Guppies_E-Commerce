import React from "react"
import MyNavbar from "./mynavbar"
import MyFooter from "./myfooter"
import * as layoutStyles from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.layout}>
      <MyNavbar></MyNavbar>
      <main className={layoutStyles.content}>{props.children}</main>
      <div className={layoutStyles.footer}>
        <MyFooter />
      </div>
    </div>
  )
}
export default Layout
