import React from 'react'
import "./button.css"

function Button(props) {
  return (
    <div>
        <button className={props.name === "live" ? "live" : "demo"}>
            {props.name} {props.symbol}
        </button>
    </div>
  )
}

export default Button