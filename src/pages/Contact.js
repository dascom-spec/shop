import React from 'react';
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className="contact-container">
      <h2 class="contact-header">Contact Us</h2>

       <form class="form">
         
         <input type="text" id="name" placeholder='Enter your name...' />
         
         <input type="text" id="surnname" placeholder='Enter your surname...'/>
         
         <input type="text" id="email"  placeholder='Enter your email...' />
       
         <input type="text" id="tel" placeholder='Enter your phne number..' />

         <textarea name="" id="" cols="30" rows="10" class="textarea" placeholder="Type your message here..."></textarea>

          <button id="submit">Submit</button>
       </form>
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

export default Contact
