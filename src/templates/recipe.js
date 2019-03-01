import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Recipe from "../components/Recipe/Recipe"

const recipeTemplate = props => {
  const { nodeRecipe: recipe } = props.data

  return (
    <Layout>
      <Helmet
        title={`Umami - ${recipe.title}`}
        meta={[{ name: "description", content: recipe.title }]}
      />
      <Recipe
        {...recipe}
        category={recipe.relationships.category[0].name}
        tags={recipe.relationships.tags}
        instructions={recipe.instructions.processed}
        summary={recipe.summary.processed}
      />
    </Layout>
  )
}

export default recipeTemplate

export const query = graphql`
  query RecipeTemplate($drupal_id: String!) {
    nodeRecipe(drupal_id: { eq: $drupal_id }) {
      drupal_id
      title
      cooking_time: field_cooking_time
      difficulty: field_difficulty
      ingredients: field_ingredients
      preparation_time: field_preparation_time
      number_of_servings: field_number_of_servings
      instructions: field_recipe_instruction {
        processed
      }
      summary: field_summary {
        processed
      }
      relationships {
        category: field_recipe_category {
          name
        }
        tags: field_tags {
          name
        }
      }
    }
  }
`
