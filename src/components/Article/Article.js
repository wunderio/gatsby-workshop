import React from "react"
import Img from "gatsby-image"

const Article = props => (
  <>
    <h1>{props.title}</h1>
    <p>Created: {props.created} </p>

    {props.image.localFile && (
      <Img fluid={props.image.localFile.childImageSharp.fluid} />
    )}
    
    <p dangerouslySetInnerHTML={{ __html: props.body }} />

  </>
)

export default Article
