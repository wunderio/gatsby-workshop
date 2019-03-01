import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allNodeRecipe {
          edges {
            node {
              title
              field_summary {
                value
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`umani`, `application`, `react`]} />
        <h1>Welcome to Umami!</h1>
        <p> Here's our latest recipes: </p>
        <ul>
          {data.allNodeRecipe.edges.map(recipe => (
            <li>
              <p>
                <strong>{recipe.node.title}</strong>
              </p>
              <small>{recipe.node.field_summary.value}</small>
            </li>
          ))}
        </ul>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )}
  />
)

export default IndexPage
