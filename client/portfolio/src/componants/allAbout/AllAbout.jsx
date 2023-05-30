import React from 'react'
import {Link} from "react-router-dom"
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./allAbout.css"
import { BsSend } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { motion } from "framer-motion";
import Experience from '../experience/Experience';
import { useSelector } from "react-redux";



function AllAbout() {
  const { admin } = useSelector((state) => state.admin);
  const [funFacts, setFunFacts] = useState([])
  const [funFact, setfunFact] = useState("")
  const [ffToEdit, setffToEdit] = useState({fact_desc: ""})
  const [editMode, seteditMode] = useState(false)
  const [modifField, setmodifField] = useState(ffToEdit.fact_desc);
  useEffect(() => {
    setmodifField(ffToEdit.fact_desc);
  }, [ffToEdit]);
  useEffect(() => {
    axios
      .get("http://localhost:9006/api/funfacts", {
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setFunFacts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFunFactAddChange = (e) => {
    setfunFact(e.target.value);
  }

  const handleEditChange = (e) => {
    setmodifField(e.target.value);
  }

  const handleAddFf = (e) => {
    e.preventDefault();
    const formData = {
      fact_desc: funFact
    }
    axios
      .post("http://localhost:9006/api/funfacts",formData)
      .then(()=>{
          axios
          .get("http://localhost:9006/api/funfacts")
            .then((response) => {
                setFunFacts(response.data)
              }
              )
              .catch((error) => {
                console.log(error);
              }
              )
              setfunFact("");
          }
          )
          .catch((error) => {
            console.log(error);
          }
          )
  }
  const handleDelFf = (id) => {
    axios
    .delete(`http://localhost:9006/api/funfact/delete/${id}`)
    .then(() => {
      axios
      .get("http://localhost:9006/api/funfacts")
      .then((response) => {
        setFunFacts(response.data)
      }
      )
      .catch((error) => {
        console.log(error);
      }
      )
    }
    )
    .catch((error) => {
      console.log(error + "in delete");
    }
    )
  }

  const handleEdit = (id) => {
    const editFormData = {
      fact_desc : modifField
    }
    axios
    .put(`http://localhost:9006/api/updatefunfact/${id}`,editFormData)
    .then(() => {
      axios
      .get("http://localhost:9006/api/funfacts")
      .then((response) => {
        setFunFacts(response.data)
        setmodifField("");
        seteditMode((prev) => !prev)
      }
      )
      .catch((error) => {
        console.log(error);
      }
      )
    }
    )
    .catch((error) => {
      console.log(error + "in modify");
    }
    )
  }
  
  
  
  

  return (
    <div className="spacing" id='about'>
      <div className="path">
        <Link to="/">
          <span>./</span>fun facts about me
        </Link>
        <form action="" className={`${admin ? "" : "user"}`}>
          <div className="fff">
            <label htmlFor="ff-input">add another : </label>
            <input type="text" onChange={handleFunFactAddChange} value={funFact} name="" id="ff-input" />
            <button onClick={handleAddFf} className='ff-button'> <BsSend /> </button>
          </div>
        </form>
      </div>
      <div className="all-about-container">
        <div className="funfacts">
          {
            funFacts.map((item,index) =>{
              return(
                <motion.span 
                className="funfact" 
                key = {index}
                initial = {{x : "100px"}}
                animate = {{x : "0"}}
                transition={{duration : "1" ,type : "tween"}}
                >
                  <div className={`operations modif-ff ${admin ? "" : "user"}`}>
                    <BiPencil onClick={()=>{
                      seteditMode((prev) => !prev)
                      setffToEdit(item)
                    }} className='operation' />
                    <AiOutlineCloseCircle onClick={()=>handleDelFf(item.id)} className='operation' />
                  </div>
                  {item.fact_desc}
                </motion.span>
              )
            })
          }
        </div>
      <div className="left-side">
        <img src="img/dots.png" />
        <img src="img/dots.png" />
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
      </div>
      <motion.form 
      action="" 
      className={`modify-ff-form ${(editMode ? "edit-mode" : "")}`}
      key={editMode}
      initial={{x : 500 , y : "-50%" }}
      animate = {{x : 0 }}
      transition={{duration : "0.5"}}
      >
        <div className="fff">
          <label htmlFor="ff-input-modif">edit : </label>
          <input id='ff-input-modif' type="text" onChange={handleEditChange} value={modifField} name="" className="ff-input" />
          <button onClick={(e) => {e.preventDefault();handleEdit(ffToEdit.id)}} className='ff-button'> <BsSend /> </button>
          <button className='ff-button'onClick={(e)=>{e.preventDefault(); seteditMode((prev) =>!prev)}}><AiOutlineCloseCircle /></button>
          
        </div>
      </motion.form>
      <Experience />
    </div>
  )
}

export default AllAbout