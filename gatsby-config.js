/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "PRODUCTS",
        fieldName: "products",
        url: "https://api-eu-central-1.graphcms.com/v2/ckr492jfn04bm01xl8ogz3x5z/master",
      },
    },
  ],
}
