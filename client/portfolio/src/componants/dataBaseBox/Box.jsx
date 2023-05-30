import React from 'react'
import { skills } from '../data/skills'
import './box.css'

function Box(props) {
    let content;
    if (props.title === "languages") {
        content = skills.languages.map((item, index) => {
            return (
                <span key={index}> {item} </span>
            )
        });
    } else if (props.title === "Tools") {
        content = skills.Tools.map((item, index) => {
            return (
                <span key={index}> {item} </span>
            )
        });
    } else if (props.title === "Frameworks") {
        content = skills.Frameworks.map((item, index) => {
            return (
                <span key={index}> {item} </span>
            )
        });
    } else if (props.title === "Other") {
        content = skills.Other.map((item, index) => {
            return (
                <span key={index}> {item} </span>
            )
        });
    } else if (props.title === "DataBases") {
        content = skills.DataBases.map((item, index) => {
            return (
                <span key={index}> {item} </span>
            )
        });
    } else {
        content = "nothin to shaw :=)";
    }
  return (
    <div className={`db-box ${props.title}`}>
        <div className="title">
            {props.title}
        </div>
        <div className="properties">
            {
                content
            }
        </div>
    </div>
  )
}

export default Box