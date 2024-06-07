import React from 'react';
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className='footer'>
  
      <p className='mail'>
        <BiLogoGmail />
        sarveshsusindran@gmail.com
      </p>
      <p className='mail'>
        <FaGithub />
        sarveshsusindran</p>
    </footer>
  );
};

export default Footer;
