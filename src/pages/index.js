import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import * as homeStyles from "../styles/home.module.scss"
import { BiRadioCircle } from "@react-icons/all-files/bi/BiRadioCircle"

const Homepage = () => {
  return (
    <Layout>
      {/* <img src="" alt="" width="1920" height="400" /> */}
      <div className={homeStyles.lightDiv}></div>

      <div>
        {/* <h1 className={homeStyles.categoryHeader}>Categories</h1> */}

        <div className={homeStyles.categoryPanels}>
          <div className={homeStyles.explain}>
            <svg>
              <circle
                cx="50%"
                cy="50%"
                r="10"
                stroke="black"
                stroke-width="3"
                fill="white"
              />
            </svg>
            <p>Hover and click on a blinking circle</p>
          </div>

          <div className={homeStyles.fish}>
            <svg className={homeStyles.circleSvg}>
              <Link to="/Fish" className={homeStyles.fishCatBtn}>
                <circle
                  className={homeStyles.backgroundCircle}
                  cx="50%"
                  cy="50%"
                  r="40"
                  stroke="white"
                  stroke-width="3"
                  fill="transparent"
                />
                <text x="50%" y="50%">
                  Fish
                </text>
                <circle
                  className={homeStyles.glowingCircle}
                  cx="50%"
                  cy="50%"
                  r="10"
                  stroke="white"
                  stroke-width="3"
                  fill="transparent"
                />
              </Link>
            </svg>
          </div>
          <div className={homeStyles.tank}>
            <svg className={homeStyles.circleSvg}>
              <Link to="/Tanks" className={homeStyles.fishCatBtn}>
                <circle
                  className={homeStyles.backgroundCircle}
                  cx="50%"
                  cy="50%"
                  r="40"
                  stroke="white"
                  stroke-width="3"
                  fill="transparent"
                />
                <text x="50%" y="50%">
                  Tanks
                </text>
                <circle
                  className={homeStyles.glowingCircle}
                  cx="50%"
                  cy="50%"
                  r="10"
                  stroke="white"
                  stroke-width="3"
                  fill="transparent"
                />
              </Link>
            </svg>
          </div>
          <div className={homeStyles.heater}>
            <svg className={homeStyles.circleSvg}>
              <Link to="/Heaters" className={homeStyles.fishCatBtn}>
                <circle
                  className={homeStyles.backgroundCircle}
                  cx="50%"
                  cy="50%"
                  r="40"
                  stroke="white"
                  stroke-width="3"
                  fill="transparent"
                />
                <text x="50%" y="50%">
                  Heaters
                </text>
                <circle
                  className={homeStyles.glowingCircle}
                  cx="50%"
                  cy="50%"
                  r="10"
                  stroke="white"
                  stroke-width="3"
                  fill="transparent"
                />
              </Link>
            </svg>
          </div>
          <div className={homeStyles.plants}>
            <svg className={homeStyles.circleSvg}>
              <Link to="/Plants" className={homeStyles.fishCatBtn}>
                <circle
                  className={homeStyles.backgroundCircle}
                  cx="50%"
                  cy="50%"
                  r="40"
                  stroke="white"
                  stroke-width="3"
                  fill="transparent"
                />
                <text x="50%" y="50%">
                  Plants+
                </text>
                <circle
                  className={homeStyles.glowingCircle}
                  cx="50%"
                  cy="50%"
                  r="10"
                  stroke="white"
                  stroke-width="3"
                  fill="transparent"
                />
              </Link>
            </svg>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
