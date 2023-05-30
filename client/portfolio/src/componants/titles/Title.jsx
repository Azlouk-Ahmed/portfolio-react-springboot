import React from 'react'
import "./title.css"
import { Link } from 'react-router-dom'

function Title(props) {
  return (
    <div className='title--holder'> 
        <div className="container">
            <span>#</span> {props.title}
        </div>
        {props.componant ? (
          <Link to={`/projects`} className='link'>View all ~~&gt;</Link>
        ) : null }
        
    </div>
  )
}

export default Title