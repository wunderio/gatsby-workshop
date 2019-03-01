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
              summary: field_summary {
                processed
              }
              path {
                alias
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
              <Link to={recipe.node.path.alias}>
                <p>
                  <strong>{recipe.node.title}</strong>
                </p>
              </Link>
              <small
                dangerouslySetInnerHTML={{
                  __html: recipe.node.summary.processed,
                }}
              />
            </li>
          ))}
        </ul>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )}
  />
)

export default IndexPage
