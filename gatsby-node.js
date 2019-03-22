/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allNodeRecipe {
          edges {
            node {
              drupal_id
              title
              path {
                alias
              }
            }
          }
        }
        allNodeArticle {
          edges {
            node {
              title
              drupal_id
              path {
                alias
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allNodeRecipe.edges.forEach(({ node }) => {
        createPage({
          path: node.path.alias,
          component: path.resolve(`./src/templates/recipe.js`),
          context: {
            drupal_id: node.drupal_id,
          },
        })
      })

      result.data.allNodeArticle.edges.forEach(({ node }) => {
        createPage({
          path: node.path.alias,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            drupal_id: node.drupal_id,
          },
        })
      })

      resolve()
    })
  })
}
