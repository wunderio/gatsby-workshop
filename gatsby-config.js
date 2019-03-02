module.exports = {
  siteMetadata: {
    title: `Umami gatsby demo`,
    description: `This is a test demo implementation of gatsby + drupal`,
    author: `@wunder`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Gatsby umami`,
        start_url: `/`,
        background_color: `#00836d`,
        theme_color: `#00836d`,
        display: `minimal-ui`,
        icon: `src/images/umami-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://master.gatsby-workshop-backend.silta.wdr.io`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",
  ],
}
