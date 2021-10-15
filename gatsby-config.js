require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-sass",

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.MY_LINK,
        token: process.env.MY_TOKEN,
      },
    },
  ],
}
