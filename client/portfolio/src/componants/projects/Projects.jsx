import React from 'react'
import Title from '../titles/Title'
import "./projects.css"
import { projectsData } from '../data/projects' 
import Button from '../buttons/Button';

function Projects() {
  return (
    <main id='projects'>
      <Title title = "Projects" componant="projects" />
        <div className="box"></div>
        <img src="img/dots.png" alt="" />
      <div className="projects">
        {
          projectsData.map((item,index)=>{
            return (
              <div className="card" key={index}>
                <img src={item.img} alt="" />
                <span>
                  {item.tools}
                </span>
                <div className="holder">
                  <h3>
                    {item.name}
                  </h3>
                  <p>
                    {item.snippet}
                  </p>
                  <Button name="live" symbol = "<~>" />
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default Projects