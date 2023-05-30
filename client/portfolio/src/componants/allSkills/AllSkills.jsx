import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./allSkills.css"
import {BiMessageSquareAdd} from 'react-icons/bi'
import { useSelector } from "react-redux";
import {AiFillDelete} from "react-icons/ai";
import { motion } from "framer-motion";

function AllSkills() {
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState("");
  const [properties, setProperties] = useState("");
  const { admin } = useSelector((state) => state.admin);
  const transition = { type: "spring", duration: 1 };

  

  useEffect(() => {
    axios
      .get("http://localhost:9006/api/skills", {
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handlePropertiesChange = (e) => {
    setProperties(e.target.value); 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      skill_name : title,
      skill_list : properties
    }
    axios
      .post("http://localhost:9006/api/skills",formData)
      .then(() => {
        axios
          .get("http://localhost:9006/api/skills", {
            headers: {
              "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setSkills(response.data)
          })
          .catch((error)=>{
            console.log("get statment error"+ error);
          })
          setTitle("");
          setProperties("");
      })
      .catch((error) => {
        console.log(error);
      })
  }
  function handleDelete(id) {
    axios
      .delete(`http://localhost:9006/api/skills/delete/${id}`)
      .then(() => {
        axios
          .get("http://localhost:9006/api/skills", {
            headers: {
              "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setSkills(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error); 
      });
  }
  return (
    <div className='spacing' id='skills'>
      <div className="path">
        <Link to="/">
          <span>./</span>Skills
        </Link>
      </div>
        <motion.form 
        key={admin} 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
        className={`${admin ? "" : "user"}`}>
          <div className="add-skill db-box gap-0">
            <span> <BiMessageSquareAdd /></span>
            <div className="title">
              <input type="text" className='w-h-full' onChange={handleTitleChange} value={title} placeholder='skill title' />
            </div>
            <div className="properties">
              <input type="text" className='w-h-full' onChange={handlePropertiesChange} value={properties} placeholder='skill properties' />
            <button type="submit" onClick={handleSubmit} className='live'>add a skill {">="}</button>
            </div>
          </div>
        </motion.form>
      <div className="right-side">

        {
          skills.map((item,index)=>(
            <motion.div 
            className="db-box" 
            key={index}
            initial={{x: 100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false }}

            transition={transition}
            >
              <motion.div 
              className={`operations skill-operations ${admin ? "" : "user"}`}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              key={admin}
              >
                  <div
                    className="delete--app"
                    onClick={() => handleDelete(item.id)}
                  >
                    <AiFillDelete />
                  </div>
                </motion.div>
              <div className="title">
                {item.skill_name}
              </div>
              <div className="properties">
                {item.skill_list}
              </div>
            </motion.div>
          ))
        }
      </div>

    </div>
  )
}

export default AllSkills