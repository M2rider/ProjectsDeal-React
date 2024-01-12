import React from 'react'
import { FaFacebook,FaYoutube, FaInstagram, FaPinterest, FaLinkedinIn, FaGoogle, FaWhatsapp } from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer'>
        
        <div>
            <a href='https://www.facebook.com/BestDissertationWritingServiceUK'>
            <FaFacebook fill='white'/> &nbsp;&nbsp;</a>
            <a href='https://www.youtube.com/c/ProjectsdealDissertationHelp'>
            <FaYoutube fill='white'/>&nbsp;&nbsp;</a>
            <a href='https://www.instagram.com/dissertation.writing.service/'>
            <FaInstagram fill='white'/>&nbsp;&nbsp;</a>
            <a href='https://www.instagram.com/dissertation.writing.service/'>
            <FaPinterest fill='white'/>&nbsp;&nbsp;</a>
            <a href='https://www.linkedin.com/company/dissertation-writing-serviceuk/'>
            <FaLinkedinIn fill='white'/>&nbsp;&nbsp;</a>
            <a href='https://g.page/r/CXEFaNYHLBt7EBE/'>
            <FaGoogle fill='white'/>&nbsp;&nbsp;</a>
            <a href='https://wa.me/447447882377'>
            <FaWhatsapp fill='white'/>&nbsp;&nbsp;</a>
        </div>

        <div>
            <p className='light-blue , bold'>
                Corporate Address!
            </p>
            <p className='white , center'>
              10 Upper Bank Street London, London E145GH  United Kingdom <br />
              Telephone: + 44 (0)20 3290 0046 <br/>
              Copyright © 2001-2024 Projectsdeal. All rights reserved.
            </p>
        </div>

    </div>
  )
}

export default Footer