import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

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
              drupal_id
              summary: field_summary {
                processed
              }
              path {
                alias
              }
              relationships {
                image: field_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 140) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
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
        {data.allNodeRecipe.edges.map(recipe => (
          <article key={recipe.node.drupal_id} className="teaser">
            <div className="image">
              <Img
                fluid={
                  recipe.node.relationships.image.localFile.childImageSharp
                    .fluid
                }
              />
            </div>

            <div className="info">
              <Link to={recipe.node.path.alias}>
                <strong>{recipe.node.title}</strong>
              </Link>
              <small
                dangerouslySetInnerHTML={{
                  __html: recipe.node.summary.processed,
                }}
              />
            </div>
          </article>
        ))}
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )}
  />
)

export default IndexPage
