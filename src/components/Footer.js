import {Link} from "react-router-dom";
import React from 'react';
import appstore from "../assets/appstore.png"
import googleplay from "../assets/googleplay.png"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div className="footer-cover">
     <div className="container-footer"> 
      <div className="text-footer">
           <h5>Pages Links</h5>
         <div className="useful">
             <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="text-footer">
            <h5>Download Our App </h5>
            
             <p>Download App for Android and IOS for mobile phone</p>
              <div className="logo-marks">
                <img src={appstore} alt=""  className="appstore"/>
                <img src={googleplay} alt="" className="googleplay" />
              </div>
        </div>
         <div className="text-footer">
            <h5>CONTACT US</h5>
          
            <div className="address">
              <i class="fa fa-phone">Tel:+1(564)8953256</i>
              <i class="fa fa-envelope">Mail:dascom@gmail.com</i>
              <i class="fa fa-address-card-o">PO.BOX:768 Oliver Street , Yaounde-Cameroon</i>
            
            </div>
         </div>
         <div className="text-footer">
            <h5>Follow Us</h5>
            
            <p>Follow us on social media</p>
            <div className="media">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-whatsapp"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-linkedin"></i>
            </div>
         </div>
     </div>
   </div>
  </div>
      
    
   
  )
}

export default Footer
