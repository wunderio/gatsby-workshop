import React from "react"

const Recipe = props => (
  <>
    <h1>{props.title}</h1>
    <p>category: {props.category} </p>

    <h3>Preparation time: {props.preparation_time} minutes</h3>
    <p dangerouslySetInnerHTML={{ __html: props.summary }} />

    <h3>Ingredients</h3>
    <p dangerouslySetInnerHTML={{ __html: props.ingredients }} />

    <h3>Instructions</h3>
    <p dangerouslySetInnerHTML={{ __html: props.instructions }} />
  </>
)

export default Recipe
