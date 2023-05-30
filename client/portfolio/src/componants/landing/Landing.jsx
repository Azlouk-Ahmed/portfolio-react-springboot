import React from 'react'
import "./landing.css"
import { AiOutlineMail,AiFillGithub,AiFillDribbbleCircle,AiOutlineInstagram } from "react-icons/ai";
import Title from '../titles/Title';
import Button from '../buttons/Button';


function Landing(props) {
  console.log(props.user);
  return (
    <div className="landing" id='home'>
      <div className="links">
        <span></span>
        <a href={props.user.instagram}><AiOutlineInstagram /></a>
        <a href={props.user.github}><AiFillGithub /></a>
        <a href={`mailto:${props.user.user_email}`}><AiOutlineMail /></a>
        
      </div>
      <div className="intro">
        <h3>
          {props.user.user_name} is a <span> web designer </span> and <span> {props.user.user_speciality} </span>
        </h3>
        <p>
        He crafts responsive websites where technologies<br/>meet creativity
        </p>
        <Button name="contact me" symbol = "!!" />
      </div>
      <div className="img">
        <img src="img/dots.png" className="dots" alt="" />
        <img src="img/landing.png" alt="" />
        <p>
          <span></span>
          Currently working on portfolio project
        </p>
      </div>
    </div>
  )
}

export default Landing