import React from "react";
import "./modify.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CiImageOn } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {useDispatch,useSelector} from "react-redux"
import { toggle,setReloaded } from '../../features/toggleModify'
import axios from 'axios';
import { changeRole } from "../../features/user";

function Modify(props) {
    const {opened} = useSelector((state) => state.opened);
    const dispatch = useDispatch();
    const transition = { type: "spring", duration: 1 };
    const {admin} = useSelector((state) => state.admin);
    const {reload} = useSelector((state) => state.reloaded);

    const [name, setName] = useState(props.project.project_name);
    const [description, setDescription] = useState(props.project.project_description);
    const [tools, setTools] = useState(props.project.project_tools);
    const [imagePath, setImagePath] = useState(props.project.project_image);
    const [projectType, setProjectType] = useState("complete-app");
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handleToolsChange = (event) => {setTools(event.target.value);};
    const handleProjectTypeChange = (event) => {setProjectType(event.target.value);dispatch(setReloaded(true))};
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImagePath("img/" + file.name);
    };
   
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
        project_name: name,
        project_description: description,
        project_tools: tools,
        project_image: imagePath,
        project_status: projectType,
        };
        axios
        .put(`http://localhost:9006/api/UpdateProj/${props.project.id}`, formData)
        .then(() => {
            window.localStorage.setItem('isAdmin', true);
            // reset the form inputs
            setName("");
            setDescription("");
            setTools("");
            setImagePath("");
            setProjectType("");
            // close the form
            dispatch(toggle(false));
            dispatch(setReloaded(true))
        })
        .catch((error) => {
            console.log(error);
        });
    };
return (
    <div className="form--overlay">
        <span
        className="close--form"
        onClick={() => {
            dispatch(toggle(false));
        }}
        >
        <AiOutlineCloseCircle className="close-icon" />
        </span>
    <motion.form
        className="more--gap"
        key={opened}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
    >
        <div className="name--input">
        <label className="dark--bg" htmlFor="">
            project name :
        </label>
        <input
            type="text"
            className="dark--bg"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
        />
        </div>
        <div className="name--input">
        <label className="dark--bg" htmlFor="">
            project description :
        </label>
        <input
            type="text"
            className="dark--bg"
            name="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
        />
        </div>
        <div className="name--input">
        <label className="dark--bg" htmlFor="">
            project tools :
        </label>
        <input
            type="text"
            className="dark--bg"
            name="tools"
            id="tools"
            value={tools}
            onChange={handleToolsChange}
        />
        </div>
        <label className="input--image" htmlFor="imp">
        <IoMdAdd className="plus--icon" />
        <span>
            <CiImageOn />
        </span>
        <input
            type="file"
            id="imp"
            accept="image/png, image/jpg, image/gif, image/jpeg"
            onChange={handleImageUpload}
        />
        </label>
        <select
        value={projectType}
        className="dark--bg"
        onChange={handleProjectTypeChange}
        name="type"
        >
        <option value="complete-app">complete app</option>
        <option value="small-project">small project</option>
        </select>
        <button type="submit"
        onClick={handleSubmit}
        >
            submit
        </button>
    </motion.form>
    </div>
);
}

export default Modify;
