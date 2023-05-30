import React from 'react'
import Box from '../dataBaseBox/Box'
import "./skills.css"
import Title from '../titles/Title'
import "./skills.css"

function Skills() {
  return (
    <main id='skills'>
        <Title title ="skills" componant="skills" />
        <div className="skills">
            <div className="left-side">
                <img src="img/dots.png" alt="" />
                <img src="img/dots.png" alt="" />
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
            <div className="right-side">
                <div>
                    <Box title="languages"/>
                </div>
                <div>
                    <Box title="DataBases"/>
                    <Box title="Other"/>

                </div>
                <div>
                    <Box title="Tools"/>
                    <Box title="Frameworks"/>
                    <Box title="Frameworks"/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Skills