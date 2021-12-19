import React from "react"
import { Link } from "react-router-dom"

export default function somecomp (props) {
  return(
    <div>
      <h2>------------------</h2>
      <h3>{props.title}</h3>
      <h4>{props.url}</h4>
      <Link to={`/portfolio/${props.slug}`}>SomeLink</Link>
      <h3>{props.description}</h3>
    </div>
  )
}
  
