import React from 'react'
import Title from '../titles/Title'
import {AiOutlineMail} from "react-icons/ai"
import {BsDiscord} from "react-icons/bs"
import "./contact.css"
import Button from '../buttons/Button'
import emailjs from '@emailjs/browser';
import {useRef} from "react"

function Contact() {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_lzfps1j', 'template_061iovj', form.current, '5ddo6PQPTT7fIycvW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

  return (
    <div id = "contact">
        <Title title="contacts"/>
        <div className="contact">
            <div className="p">
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </div>
            <div className="socials">
                <p>Or contact me here !</p>
                <div className="disc">
                    <BsDiscord /> discord
                </div>
                <div className="email">
                    <AiOutlineMail /> email
                </div>
            </div>
        </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="name">
                    <div className="name--input">
                        <label htmlFor="">name</label>
                        <input type="text" name="name" id="" />
                    </div>
                    <div className="name--input">
                        <label htmlFor="">surname</label>
                        <input type="text" name="surname" id="" />
                    </div>
                </div>
                <div className="input">
                    <label htmlFor="">email</label>
                    <input type="text" name="email" id="" />
                </div>
                <div className="input">
                    <label htmlFor="">subjet</label>
                    <input type="text" name="subject" id="" />
                </div>
                <div className="input">
                    <label htmlFor="">message</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="input">
                    <Button name="submit" symbol ="=>" />
                </div>
            </form>
    </div>
  )
}

export default Contact