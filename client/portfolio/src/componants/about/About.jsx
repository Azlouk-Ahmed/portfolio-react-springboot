import React from 'react'
import "./about.css"
import Title from '../titles/Title'
import {about} from "../data/about"
import { useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const transition = {type:"spring",duration:1}
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(about.length-1);
  const add = () => {
    if(count<max){
      setCount(count+1);
    }else {
      setCount(min)
    }
    console.log(count);
  }
  const minus = () => {
    if(count>min){
      setCount((prev => prev-1))
    }else {
      setCount(max);
    }
    console.log(count);
  }
  return (
    <div id='about'>
        <Title title = "about-me" componant="about"/>
        <div className="about">
            <div className="parag">

<motion.span
  key={count}
  initial = {{opacity:0,x:-100}}
  animate = {{opacity:1,x:0}}
  transition = {transition}
> {about[count].span1} </motion.span>

<motion.span
key={Math.random()}
initial = {{opacity:0,x:-100}}
animate = {{opacity:1,x:0}}
transition = {{...transition,duration :2}}
>{about[count].span2}</motion.span>
<motion.span
key={Math.random()}
initial = {{opacity:0,x:-100}}
animate = {{opacity:1,x:0}}
transition = {{...transition,duration :3}}
>{about[count].span3}</motion.span>
            <div className="buttons">
              <button onClick={minus}>{"<<"}</button>
              <button onClick={add}>{">>"}</button>
            </div>
            </div>
            <div className="img">
                <img src="img/pic2.png" alt="" />
                <img src="img/dots.png" alt="" />
                <img src="img/dots.png" alt="" />
                <div className="r--box"></div>
            </div>
        </div>
    </div>
  )
}

export default About