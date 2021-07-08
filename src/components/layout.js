import React from "react"
import MyNavbar from "./mynavbar"
import MyFooter from "./myfooter"

const Layout = props => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <main>{props.children}</main>
      <MyFooter />
    </div>
  )
}
export default Layout
