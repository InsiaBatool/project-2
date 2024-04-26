import React from 'react'
import './footer.css';
import hyfi from "../../assets/logo.png"
import img from "../../assets/image 4.png";
import image from "../../assets/image 5.png";
import Roku from "../../assets/Roku.png";



const Footer = () => {
  return (
    <div className="container">
      <div className="heading">
        <img src={hyfi} className="logo" alt=""/>
        <p className="titel">
          HYFI is now available on<br />
          iOS, Android, Roku, AppleTV,<br />
          Chromecast, and Firestick.<br />
          Use our website to purchase<br />
          content
        </p>
        </div>

        <div>
          <ul className="list">
           <li> <h2>About Us</h2> </li>
            <li>About HYFI</li>
            <li>Channels</li>
            <li>Sign in</li>
          </ul>
        </div>

        <div>
          <ul className="list1">
            <li><h2>Explore</h2></li>
            <li>What’s new</li>
            <li>The Cliburn</li>
            <li>4K HDR</li>
            <li>STL Pridefest 2020</li>
            <li>Explore</li>
          </ul>
        </div>

       <div className="images">
        <h2>Watch On</h2>
        <img id="google" src={img} alt="" /> 
        <img id="appStore" src={image} alt=""/> 
        <img id="roku" src={Roku} alt=""/>
        
       </div>

       <div className="follow">
        <h2>Follow us</h2>

        <div className="icons">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-square-youtube"></i>
        </div>
       
        
        </div>
        



        
         

        {/* <div className="end">
       © 2022 hyfi.com All rights reserved
       </div> */}
    </div>
      
    

  
  )
}

export default Footer;
