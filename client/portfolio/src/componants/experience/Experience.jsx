import React from 'react'
import "./experience.css"
import axios from 'axios';
import {useEffect, useState} from 'react'
import Footer from '../footer/Footer';
import Contact from '../contacts/Contact';
import { motion } from "framer-motion";
import { AiOutlineCloseCircle,AiFillDelete,AiOutlineAppstoreAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
function Experience(props) {
    const { admin } = useSelector((state) => state.admin);
    const [experience, setexperience] = useState([])
    const [title, setTitle] = useState("")
    const [start, setStart] = useState("")
    const [name, setName] = useState("")
    const [end, setEnd] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [style, setStyle] = useState("left")
    const [isOpened, setIsOpened] = useState(false);
    const transition = { type: "spring", duration: 1 };


    useEffect(() => {
    axios
        .get("http://localhost:9006/api/experience", {
        headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
            "Content-Type": "application/json",
        },
        })
        .then((response) => {
        setexperience(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {
        title: title,
        expirence_desc: description,
        stage_location: location,
        experience_name: name,
        date_deb: start,
        date_fin: end,
        css: style,
      };
      console.log(formData);
      axios
        .post("http://localhost:9006/api/experience", formData)
        .then(() => {
          axios
            .get("http://localhost:9006/api/experience", {
              headers: {
                "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              setexperience(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
          // reset the form inputs
          setName("");
          setDescription("");
          setEnd("");
          setStart("");
          setLocation("")
          setTitle("")
          setStyle("")
          // close the form
          setIsOpened(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    function handleDelete(id) {
      axios
        .delete(`http://localhost:9006/api/experience/delete/${id}`)
        .then(() => {
          axios
            .get("http://localhost:9006/api/experience", {
              headers: {
                "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              setexperience(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error); 
        });
    }
    const handleTitleChange =(e) => {setTitle(e.target.value); }
    const handleLocationChange =(e) => {setLocation(e.target.value); }
    const handleDescriptionChange =(e) => {setDescription(e.target.value); }
    const handleStyleChange =(e) => {setStyle(e.target.value); }
    const handleStartChange =(e) => {setStart(e.target.value); }
    const handleEndChange =(e) => {setEnd(e.target.value);  }
    const handleNameChange =(e) => {setName(e.target.value);  }
  return (
    <div className="spacing">
      <div className="path">
        <Link to="/">
          <span>./</span>Experience
        </Link>
        <div
          className={`add--project ${admin ? "" : "user"}`}
          onClick={() => {
            setIsOpened((prev) => !prev)
          }}
        >
          <AiOutlineAppstoreAdd /> <span>add an experience</span>
        </div>
      </div>
    <div className="timeline" id="ot">
    <div className="timeline-content">
        {experience.map((item,index)=>{
            return(
                <div key={index}>
                <div className="clearfix"></div>
                <div className="job"> {item.experience_name} </div>
                <div className={item.css}>
                    <div className="content">
                    <div
                    className={`delete--app p-abos ${admin ? "" : "user"}`}
                    onClick={() => handleDelete(item.id_experience)}
                  >
                    <AiFillDelete />
                  </div>
                        <h3> {item.title} </h3>
                        <h4> description :</h4> 
                        <p> 
                        {item.expirence_desc}
                        </p>
                        <div>
                        <h5> location :</h5> <span className='loc'> {item.stage_location} </span> 
                        </div>
                        <div className='date'>
                        Date : { new Date(item.date_deb).getFullYear()+ "-"+ new Date(item.date_deb).getMonth()+1 +"-"+ new Date(item.date_deb).getDay()} =&gt; { new Date(item.date_fin).getFullYear()+ "-"+ new Date(item.date_fin).getMonth()+1 +"-"+ new Date(item.date_fin).getDay()}
                        </div>
                    </div>
                </div>
                </div>
            )
        })
        }
    </div>
</div>
<div className={`form--overlay ${isOpened !== true ? "hide" : ""}`}>
        <span
          className="close--form"
          onClick={() => {
            setIsOpened((prev) => !prev)
          }}
        >
          <AiOutlineCloseCircle className="close-icon" />
        </span>
        <motion.form
          className="more--gap gap-2"
          key={isOpened}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <div className="name--input">
            <label className="dark--bg" htmlFor="">
              experience title :
            </label>
            <input
              type="text"
              className="dark--bg"
              name="name"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="name--input ">
            <label className="dark--bg" htmlFor="">
              Experience Name :
            </label>
            <input
              type="text"
              className="dark--bg"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="input">
            <label htmlFor="" className="dark--bg">description :</label>
            <textarea
              className="dark--bg"
              name="description"
              id="description"
              value={description}
              onChange={handleDescriptionChange} cols="30" rows="10">
            </textarea>
          </div>
          <div className="name--input ">
            <label className="dark--bg" htmlFor="">
              Experience location :
            </label>
            <input
              type="text"
              className="dark--bg"
              name="tools"
              id="location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className="d-f">
            <div className="name--input ">
            <label className='dark--bg p-0'>
              Start date:
              <input type="date" value={start} onChange={handleStartChange} name="start" />
            </label>
            </div>
            <div className="name--input p-0">
            <label className='dark--bg'>
              End date: 
              <input type="date" value={end} onChange={handleEndChange} name="end" />
            </label>
          </div>
          </div>
          <select
            value={style}
            className="dark--bg"
            onChange={handleStyleChange}
            name="type"
          >
            <option value="left">to the left</option>
            <option value="right">to the right</option>
          </select>
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </motion.form>
      </div>
        <Contact />
        <Footer user={props.user} />
    </div>
  )
}

export default Experience