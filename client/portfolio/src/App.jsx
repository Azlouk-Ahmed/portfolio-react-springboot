import { useState,useEffect } from 'react'
import './App.css'
import Home from './componants/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProjects from './componants/allProjects/AllProjects';
import AllAbout from './componants/allAbout/AllAbout';
import AllSkills from './componants/allSkills/AllSkills';
import axios from 'axios';


function App() {
  const color = window.localStorage.getItem('color');
  const font = window.localStorage.getItem('font');
  if(color != null){
    document.documentElement.style.setProperty('--primary-color', color);
  }
  if(font != null){
    document.documentElement.style.setProperty('--main-font', font);
  }

  const [user, setuser] = useState({})

  useEffect(() => {
    axios
      .get("http://localhost:9006/api/user/1", {
      headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
          "Content-Type": "application/json",
      },
      })
      .then((response) => {
      setuser(response.data);
      })
      .catch((error) => {
      console.log(error);
      });
    }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user = {user}/>}/>
        <Route path="projects" element={<AllProjects user = {user} />}/>
        <Route path="about" element={<AllAbout />}/>
        <Route path="skills" element={<AllSkills />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
