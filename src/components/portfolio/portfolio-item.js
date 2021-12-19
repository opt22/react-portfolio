import React from "react"
import { Link } from "react-router-dom"

export default function somecomp (props) {
    //Data that we we'll need:
    // - background image : thumb_image_url
    // - logo : logo_url
    // - description : description
    // - id : id
    const {id, name, description, thumb_image_url, logo } = props.item;

  return(
    <div>
      <img src={thumb_image_url} alt="thumb_image" />
      <h2>------------------</h2>
      <div>{name}</div>
      <div>{description}</div>
      <h3>{props.title}</h3>
      <h4>{props.url}</h4>
      <Link to={`/portfolio/${props.slug}`}>SomeLink</Link>
    </div>
  )
}
  
