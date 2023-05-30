import React from 'react'
import "./quote.css"
import { VscQuote } from "react-icons/vsc";

function Quote() {
  return (
    <div className="wrapper">
        <div className="box"></div>
        <div className="quote">
            <VscQuote className='left' />
            <VscQuote className='right' />
            With great power comes great electricity bill
        </div>
        <div className="owner">
            - Dr. Who
        </div>
    </div>
  )
}

export default Quote