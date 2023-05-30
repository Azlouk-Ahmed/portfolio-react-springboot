import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../nav/Navbar";
import "./allPorjects.css";
import { motion } from "framer-motion";
import Button from "../buttons/Button";
import {
  AiOutlineAppstoreAdd,
  AiOutlineCloseCircle,
  AiFillDelete,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Styles from "../stylesComponant/Styles";
import { useDispatch, useSelector } from "react-redux";
import { setReloaded, toggle } from "../../features/toggleModify";
import Modify from "../modifyForm/Modify";
import AllSkills from "../allSkills/AllSkills";
import AllAbout from "../allAbout/AllAbout";
function AllProjects() {
  const { opened } = useSelector((state) => state.opened);
  const { reloaded } = useSelector((state) => state.reloaded);
  const { admin } = useSelector((state) => state.admin);
  const transition = { type: "spring", duration: 1 };
  const [data, setData] = useState([]);
  const [projectToModify, setProjectToModify] = useState({});
  const [isOpened, setIsOpened] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tools, setTools] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [projectType, setProjectType] = useState("complete-app");
  useEffect(() => {
    dispatch(setReloaded(false));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:9006/api/projects", {
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      dispatch(setReloaded(false));
  }, [reloaded]);

  const toggleForm = () => {
    setIsOpened((prev) => !prev);
  };
  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleToolsChange = (event) => {setTools(event.target.value);};
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImagePath("img/" + file.name);
  };
  const handleProjectTypeChange = (event) => {
    setProjectType(event.target.value);
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
      .post("http://localhost:9006/api/projects", formData)
      .then(() => {
        axios
          .get("http://localhost:9006/api/projects", {
            headers: {
              "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        // reset the form inputs
        setName("");
        setDescription("");
        setTools("");
        setImagePath("");
        setProjectType("");
        // close the form
        setIsOpened(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleDelete(id) {
    axios
      .delete(`http://localhost:9006/api/delete/${id}`)
      .then(() => {
        axios
          .get("http://localhost:9006/api/projects", {
            headers: {
              "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error); // log any errors to the console
      });
  }
  const dispatch = useDispatch();
  function handleModifyForm() {
    dispatch(toggle(true));
  }

  return (
    <div className="home--layout">
      <Styles />
      <Navbar />
      <div className="path">
        <Link to="/">
          <span>./</span>projects
        </Link>
        <div
          className={`add--project ${admin ? "" : "user"}`}
          onClick={() => {
            toggleForm();
          }}
        >
          <AiOutlineAppstoreAdd /> <span>add a project</span>
        </div>
      </div>
      <div className="comp-apps">
        <span># </span>complete apps
      </div>
      <div className="projects">
        {data
          .filter((item) => item.project_status === "complete-app")
          .map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className={`operations ${admin ? "" : "user"}`}>
                  <div
                    onClick={() => {
                      handleModifyForm();
                      setProjectToModify(item);
                    }}
                    className="modify"
                  >
                    <BsPencil />
                  </div>
                  <div
                    className="delete--app"
                    onClick={() => handleDelete(item.id)}
                  >
                    <AiFillDelete />
                  </div>
                </div>

                <img src={item.project_image} alt="" />
                <span>{item.project_tools}</span>
                <div className="holder">
                  <h3>{item.project_name}</h3>
                  <p>{item.project_description}</p>
                  <Button name="live" symbol="<~>" />
                </div>
                {/* {(opened)?(<Modify project={item} />): null} */}
              </div>
            );
          })}
      </div>

      <div className="comp-apps">
        <span># </span>small projects
      </div>
      <div className="small--projects">
        <div className="projects">
          {data
            .filter((item) => item.project_status === "small-project")
            .map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className={`operations ${admin ? "" : "user"}`}>
                    <div
                      onClick={() => {
                        handleModifyForm();
                        setProjectToModify(item);
                      }}
                      className="modify"
                    >
                      <BsPencil />
                    </div>
                    <div
                      className="delete--app"
                      onClick={() => handleDelete(item.id)}
                    >
                      <AiFillDelete />
                    </div>
                  </div>

                  <img src={item.project_image} alt="" />
                  <span>{item.project_tools}</span>
                  <div className="holder">
                    <h3>{item.project_name}</h3>
                    <p>{item.project_description}</p>
                    <Button name="live" symbol="<~>" />
                  </div>
                  {/* {(opened)?(<Modify project={item} />): null} */}
                </div>
              );
            })}
        </div>
      </div>
      <div className={`form--overlay ${isOpened !== true ? "hide" : ""}`}>
        <span
          className="close--form"
          onClick={() => {
            toggleForm();
          }}
        >
          <AiOutlineCloseCircle className="close-icon" />
        </span>
        <motion.form
          className="more--gap"
          key={isOpened}
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
          <label className="input--image" htmlFor="inputTag">
            <IoMdAdd className="plus--icon" />
            <span>
              <CiImageOn />
            </span>
            <input
              type="file"
              id="inputTag"
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
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </motion.form>
      </div>
      {opened ? <Modify project={projectToModify} /> : null}
      <AllSkills />
      <AllAbout />
    </div>
  );
}

export default AllProjects;
