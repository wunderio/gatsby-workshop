import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allNodeArticle {
          edges {
            node {
              title
              drupal_id
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
        <h1>Articles</h1>
        <p> Here's our latest articles: </p>
        {data.allNodeArticle.edges.map(article => (
          <article key={article.node.drupal_id} className="teaser">
            <div className="image">
              <Img
                fluid={
                  article.node.relationships.image.localFile.childImageSharp
                    .fluid
                }
              />
            </div>

            <div className="info">
              <Link to={article.node.path.alias}>
                <strong>{article.node.title}</strong>
              </Link>
              
            </div>
          </article>
        ))}
        
      </Layout>
    )}
  />
)

export default IndexPage