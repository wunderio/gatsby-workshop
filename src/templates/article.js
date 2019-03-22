import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Article from "../components/Article/Article"

const articleTemplate = props => {
  const { nodeArticle: article } = props.data

  return (
    <Layout>
      <Helmet
        title={`Umami - ${article.title}`}
        meta={[{ name: "description", content: article.title }]}
      />
      <Article
        {...article}
        created={article.created}
        body={article.body.processed}
        image={article.relationships.image}
      />
    </Layout>
  )
}

export default articleTemplate

export const query = graphql`
  query ArticleTemplate($drupal_id: String!) {
    nodeArticle(drupal_id: { eq: $drupal_id }) {
      drupal_id
      title
      created(formatString: "DD.MM.YYYY")
      body {
        processed
      }
      relationships {
        image: field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
