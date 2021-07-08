import React from "react"
import { Link } from "gatsby"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch"
import * as navStyles from "../styles/navStyles.module.scss"

const Mynavbar = () => {
  return (
    <header className={navStyles.navBar}>
      <img src="" alt="" width="300" height="200" />

      <div className={navStyles.topNav}>
        <nav className={navStyles.links}>
          <Link className={navStyles.link} to="/">
            Home
          </Link>
          <Link className={navStyles.link} to="/shop">
            Shop
          </Link>
          <Link className={navStyles.link} to="/contactus">
            Contact Us
          </Link>
          <Link className={navStyles.link} to="/faq">
            FAQ
          </Link>
        </nav>
        <input className={navStyles.searchBar} type="text" />
      </div>

      <div className={navStyles.bottomNav}>
        <div className={navStyles.contactMethods}>
          <a className={navStyles.phone} href="mailto:twiggymocha@gmail.com">
            twiggymocha@gmail.com
          </a>
          <a className={navStyles.phone} href="tel:+0767177054">
            0767177054
          </a>
        </div>

        <div>
          <label htmlFor="Categories"></label>
          <select
            className={navStyles.catDropDown}
            name="Categories"
            id="Categories"
          >
            <option selected value="All">
              All
            </option>
            <option value="Fish">Fish</option>
            <option value="Plants">Plants</option>
            <option value="Food">Food</option>
          </select>
          <FaSearch></FaSearch>
        </div>
      </div>
    </header>
  )
}

export default Mynavbar
