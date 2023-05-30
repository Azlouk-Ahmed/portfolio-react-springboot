import React from 'react'
import "./home.css"
import NavBar from "../nav/Navbar"
import Landing from "../landing/Landing"
import Quote from "../quote/Quote"
import Projects from "../projects/Projects"
import Skills from "../skills/Skills"
import About from "../about/About"
import Contact from "../contacts/Contact"
import Footer from "../footer/Footer"
import Styles from '../stylesComponant/Styles'
import Modify from '../modifyForm/Modify'

function Home(props) {
  return (
    <div className='home--layout'>
        <Styles />
        <NavBar />
        <Landing user={props.user}/>
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home