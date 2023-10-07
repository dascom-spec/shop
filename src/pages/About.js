import {Link} from "react-router-dom";
import "../styles/About.css";
import React  from 'react';
import shop from "../assets/advert.jpg"
import pro10  from "../assets/pro10.jpg";
import pro9  from "../assets/pro9.jpg";
import pro3  from "../assets/pro3.jpg";


function About() {

   

  return (

     <div className="about">
       <div className="container-color">
        <div className="showcase-container">
        <div className='showcase'>
          <div className="text-section">
            <h2>About Us</h2>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt libero, minus in provident commodi iste placeat recusandae cumque quidem ducimus autem quisquam repudiandae.</p>
               <br />
              <Link to="/Products" className="join">Visit our products</Link>
          </div>
            <img src={shop} alt="pico" id="image" />
         </div>
         </div>
         </div>
           
       <h2 className="testi-title">Our Team Menbers</h2>
        <div className="article-container">
         <div className="wrapper-container">
           <div className="article-a">
               <div className="move"><img src={pro10} alt="" id="test-1" /></div>
                <div className="text">
                    <h4>Marketing Manager</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore, saepe vero hic sed maxime illo amet nulla molestiae sit modi facere magnam iste fugiat cupiditate placeat eaque nobis facilis?</p>
                  </div>
           </div>
           <div className="article-a">
                 <div className="move"><img src={pro9} alt="" id="test-1" /></div>
                <div className="text">
                    <h4>Cashier</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore, saepe vero hic sed maxime illo amet nulla molestiae sit modi facere magnam iste fugiat cupiditate placeat eaque nobis facilis?</p>
                  </div>
           </div>
           <div className="article-a">
             <div className="move"><img src={shop} alt="" id="test-1" /></div>
                <div className="text">
                    <h4>Manager Officer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore, saepe vero hic sed maxime illo amet nulla molestiae sit modi facere magnam iste fugiat cupiditate placeat eaque nobis facilis?</p>
                  </div>
           </div>
           <div className="article-a">
              <div className="move"><img src={pro3} alt="" id="test-1" /></div>
                <div className="text">
                    <h4>Products Director</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore, saepe vero hic sed maxime illo amet nulla molestiae sit modi facere magnam iste fugiat cupiditate placeat eaque nobis facilis?</p>
                  </div>
               </div>
           </div>
     </div>
     <div className="footer-container">
      <footer>
         <div className="foot-a">
            <h5>Useful Links</h5>
            <p>Blog posts</p>
            <p>coupons</p>
             <p>Join affiliate</p>
         </div>
         <div className="foot-a">
            <h5>Follow Us</h5>
            <p>Follow us on social media</p>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-whatsapp'></i>
            <i className='fa fa-linkedin'></i>
            <i className='fa fa-youtube'></i>
         </div>
         <div className="foot-a">
            <h5>Contact Us</h5>
            <i className='fa fa-phone'><span className='span-logo'>Tel: +1(345)895660</span></i>
            <i className='fa fa-envelope'><span className='span-logo'>E-mail:store@gmail.com</span></i>
            <i className='fa fa-address-card-o'><span className='span-logo'>Address:Oliver Street, Cameroon</span></i>
         </div>
      </footer>
  </div>
  </div>

  )
}

export default About
