import React from 'react'
import my_img from '../image/del.jpg'
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Info(){
    return(
<div className='info_container'>
      <img src={my_img} width="290px" height="240px"alt='pranil'/>
          <h1>Pranil Shrestha</h1>
          <h2>Frontend Developer</h2>
          <h3>Pranil.website.com</h3>
          
            <div className="btn_grp">
              <button className="btn_email" type='buttton'><span className='icon'> <FaEnvelope /> </span>Email</button>
              <button className="btn_linkedin" type='buttton'><span className='icon'> <FaLinkedin /> </span>Linkedin</button>
            </div>
</div>
    )
}