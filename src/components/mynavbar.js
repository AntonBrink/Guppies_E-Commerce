import React from "react"
import { Link } from "gatsby"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch"

const Mynavbar = () => {
  return (
    <header>
      <img src="" alt="" />

      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
        </nav>

        <div className="contactBlock">
          <a href="mailto:twiggymocha@gmail.com">twiggymocha@gmail.com</a>
          <a href="tel:+0767177054">0767177054</a>
        </div>
      </div>

      <div>
        <input type="text" />
        <div>
          <select name="Categories" id="Categories">
            <option value="All"></option>
            <option value="Fish"></option>
            <option value="Plants"></option>
            <option value="Food"></option>
          </select>
          <FaSearch></FaSearch>
        </div>
      </div>
    </header>
  )
}

export default Mynavbar
