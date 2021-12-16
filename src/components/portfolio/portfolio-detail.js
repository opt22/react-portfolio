import React from "react";

export default function(props){
  return(
    <div>
      <h2>Greetings</h2>
      <h2>Greetings</h2>
      <h2>Greetings</h2>
      <h2>P Detail for {props.match.params.slug}</h2>
    </div>
    )
}
