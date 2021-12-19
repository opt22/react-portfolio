import React from "react"
import { Link } from "react-router-dom";
export default function(){
  return(
    <div>
      <p>Blog</p>
      <div>
        <Link to="/about-me">Read More</Link>
      </div>
    </div>
    )
}

