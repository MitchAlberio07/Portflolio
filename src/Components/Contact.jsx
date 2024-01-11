import React, { useRef } from 'react';
import './Styles/Contact.css';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nfr3pz7', 'template_vw0kzui', form.current, 'iZzswbkTcBVCTAKc-')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact'>
        <h1>Contact Me</h1>
        <span>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='user_name'/>
            <input type='email' className='email' placeholder='Your Email' name="user_email"/>
            <textarea name='message' className='msg' rows={5} placeholder='Your Message' ></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='social links'>
                <a href="https://www.facebook.com/methus.alberio?mibextid=ZbWKwL" target="_blank" className='link'><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/metuselam-alberio-a0b4a42a2/" target="_blank" className='link'><FaLinkedinIn /></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvvRLpJTvSmKdklxdKnGslRhwztBBnjccCtDCngLzsZZMLFWJrbxWLDVSDCrVrLjPcDqB" target="_blank" className='link'><BiLogoGmail /></a>
                <a href="https://github.com/MitchAlberio07?tab=repositories" target="_blank" className='link'><FiGithub /></a>
            </div>
        </form>
        
    </div>
  )
}

export default Contact
