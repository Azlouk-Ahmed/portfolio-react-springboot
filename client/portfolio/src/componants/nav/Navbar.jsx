import React from 'react'
import "./navbar.css"
import {Link} from "react-scroll"

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img src="img/logo.png" alt="" />
            Portfolio
        </div>
        <ul>
            <li><span>#</span> <Link to ='home' smooth={true}>home</Link> </li>
            <li><span>#</span> <Link to ='about' smooth={true}>about</Link> </li>
            <li><span>#</span> <Link to ='skills' smooth={true}>skills</Link> </li>
            <li><span>#</span> <Link to ='projects' smooth={true}>experience</Link> </li>
            <li><span>#</span> <Link to='contact' smooth={true}>contact</Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar