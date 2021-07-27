import React from "react"
import { Link } from "gatsby"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch"
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"

import * as navStyles from "../styles/navStyles.module.scss"

const Mynavbar = () => {
  return (
    <header className={navStyles.navBar}>
      <img src="" alt="" width="300" height="200" />

      <div className={navStyles.linksSearch}>
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
        </div>

        <div className={navStyles.bottomNav}>
          <input className={navStyles.searchBar} type="text" />

          <label htmlFor="Categories"></label>
          <select
            className={navStyles.catDropDown}
            name="Categories"
            id="Categories"
            defaultValue="All"
          >
            <option value="All">All</option>
            <option value="Fish">Fish</option>
            <option value="Plants">Plants</option>
            <option value="Food">Food</option>
          </select>
          <FaSearch className={navStyles.normalSvg}></FaSearch>
        </div>
      </div>
    </header>
  )
}

export default Mynavbar
