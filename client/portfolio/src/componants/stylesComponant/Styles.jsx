import React from 'react'
import "./styles.css"
import {AiOutlineSetting ,AiOutlineUserSwitch, AiOutlineUser} from "react-icons/ai"
import {TbAbc} from "react-icons/tb"
import {BiUserCheck} from "react-icons/bi"
import {BsPaintBucket} from "react-icons/bs"
import {useState,useEffect} from 'react'
import { changeRole } from '../../features/user'
import {useDispatch,useSelector} from "react-redux"
import axios from 'axios'

function Styles() {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const {admin} = useSelector((state) => state.admin);

  function handleAdminChange(event) {
    setIsAdmin(event.target.value === 'admin');
    dispatch(changeRole(!isAdmin));
  }

    const handleMenu = () => {
      setOpen((prev) => !prev);
    }
    const handleColorChange = (color) => {
        document.documentElement.style.setProperty('--primary-color', color);
        window.localStorage.setItem("color",color);
      }
      const handleFontChange = (newFont) => {
        document.documentElement.style.setProperty('--main-font', newFont);
        window.localStorage.setItem("font",newFont);
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
    <div className={`styles--menu ${(open) ? "open" : ""}`}>
      <div className={`settings ${(open === false) ? "rotate" : ""}`} onClick={handleMenu}>
        <AiOutlineSetting />
      </div>
      <div className="colors--wrapper">
        <div className="colors-icon">
          <BsPaintBucket />
        </div>
        <div className='colors--holder'>
            <button style={{backgroundColor : "#ffeb3b"}} className='colors' onClick={() => {handleColorChange("#ffeb3b")}}></button>
            <button style={{backgroundColor : "#ff5722"}} className='colors' onClick={() => {handleColorChange("#ff5722")}}></button>
            <button style={{backgroundColor : "#009688"}} className='colors' onClick={() => {handleColorChange("#009688")}}></button>
            <button style={{backgroundColor : "#2196f3"}} className='colors' onClick={() => {handleColorChange("#2196f3")}}></button>
            <button style={{backgroundColor : "#C778DD"}} className='colors' onClick={() => {handleColorChange("#C778DD")}}></button>
        </div>

      </div>
      <div className='fonts'>
        <div className="font-icon">
          <TbAbc />
        </div>
        <div className='font'>
          <span style={{fontFamily : "Fira Code"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, laudantium.</span>
          <button onClick={() => {handleFontChange("Fira Code")}}>set</button>
        </div>
        <div className='font'>
          <span style={{fontFamily : "Poppins"}}>Quo nisi mollitia tempora quasi dolore adipisci commodi, accusantium reprehenderit?</span>
          <button onClick={() => {handleFontChange("Poppins")}}>set</button>
        </div>
        <div className='font'>
          <span style={{fontFamily : "JetBrains Mono"}}>Nisi magnam ipsam libero error sit adipisci. Voluptatum, repudiandae delectus?</span>
          <button onClick={() => {handleFontChange("JetBrains Mono")}}>set</button>
        </div>
        <div className='font'>
          <span style={{fontFamily : "Source Code Pro"}}>Cum quibusdam ducimus eum, temporibus dignissimos necessitatibus commodi!</span>
          <button onClick={() => {handleFontChange("Source Code Pro")}}>set</button>
        </div>
      </div>

      <div className={`role--wrapper ${user.isAdmin ===1 ? "" : "user"}`}>
        <div className="role--icon">
          <AiOutlineUserSwitch />
        </div>
        <div className={`role`} >
          <span className="input">
            <input type="radio" checked={!isAdmin} value="user" onChange={handleAdminChange} name="role" id="user" /><label htmlFor='user'>View as guest <AiOutlineUser /></label>
          </span>
          <span className="input">
            <input type="radio" checked={isAdmin} value="admin" onChange={handleAdminChange} name="role" id="admin" /><label htmlFor='admin'>admin <BiUserCheck /></label>   
          </span>
        </div>
      </div>
    </div>
  )
}

export default Styles