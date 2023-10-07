
import React from 'react'
import nike1 from "../assets/nike1.jpg";
import nike2 from "../assets/nike2.jpg";
import nike5 from "../assets/nike5.jpg";
import nike8 from "../assets/nike8.jpg";
import sofa9 from "../assets/sofa9.jpg";
import sofa6 from "../assets/sofa6.jpg";
import sofa7 from "../assets/sofa7.jpg";
import sofa8 from "../assets/sofa8.jpg";
import sofa1 from "../assets/sofa1.jpg";
import sofa3 from "../assets/sofa3.jpg";
import sofa4 from "../assets/sofa4.jpg";
import sofa5 from "../assets/sofa5.jpg";
import sofa10 from "../assets/sofa10.jpg";
import pair1 from "../assets/pair1.jpg";
import pair2 from "../assets/pair2.jpg";
import pair3 from "../assets/pair3.jpg";
import pair4 from "../assets/pair4.jpg";
import pair9 from "../assets/pair9.jpg";
import pair6 from "../assets/pair6.jpg";
import watch2 from "../assets/watch2.webp"
import pico1 from "../assets/pico1.jpg"
import pico3 from "../assets/pico3.png"
import men from "../assets/men.jpg"
import microsoft from "../assets/microsoft.png"
import oppo from "../assets/oppo.jpg"
import cocacola from "../assets/cocacola.png"
import paypal from "../assets/paypal.jpg"
import philips from "../assets/philips.png"   
import nike6 from "../assets/nike6.jpg"
import "../styles/Home.css";





function Home() {
 
 
  return (
   <div className="home">
   <div className="home-container">
     <section>
      <div className="section-a">
           <div className="section-text">
              <h1 className='home-title'>Welcome To KikStore</h1>
               <p>Lorem ipsum dolore sit amet consectetur, adipisicing elit. Assumenda possimus eum tempore ullam ea sequi iusto aliquam quibusdam fugiat, sint eligendi repellat veritatis labore doloribus itaque quis! Maiores culpa quis autem voluptates quae sequi soluta pariatur possimus neque, fugiat ex, vitae officia atque architecto sint delectus minus illo blanditiis quaerat aut quas nisi ab optio sapiente. Hic numquam laborum error voluptate non officiis magnam id possimus ipsam esse quas et fuga ex, ut nemo maxime..</p>
               <br />
           <button className="btn" >Learn more</button>  
        </div>
            <img src={nike2} alt="pic" className='section-image'/>
       </div>
    </section>
   </div> 
  <div className="box-container">
      <div className="box-images">
       <img src={nike1} alt=""  className='nike1'/>
       <img src={nike5} alt="" className='nike5'/>
       <img src={nike8} alt="" className='nike8'/>
  </div>
  </div>
  
     <div className="timeline-product">
   <div className="timeline-container">
        <div className="timeline-wrapper">
        <h1>We provide the best product in time</h1>
           <div className="timeline-text">
             <h2 className="briefing">Briefing</h2>
              <p className='timeline-a'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur corrupti, consectetur doloremque, vero accusamus voluptatum iste obcaecati, alias ducimus doloribus nesciunt quia voluptatem magni dolore?</p>
           </div>
           <div className="timeline-text">
             <h2 className="pocess">Processing</h2>
              <p className='timeline-b'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur corrupti, consectetur doloremque, vero accusamus voluptatum iste obcaecati, alias ducimus doloribus nesciunt quia voluptatem magni dolore?</p>
           </div>
           <div className="timeline-text">
             <h2 className="deliver">Deliver</h2>
              <p className='timeline-c'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur corrupti, consectetur doloremque, vero accusamus voluptatum iste obcaecati, alias ducimus doloribus nesciunt quia voluptatem magni dolore?</p>
           </div>
        </div>
        <img src={nike6} alt=""  className='nike7'/>
     </div>
     </div>
   <h2 className='product-name'>Featured Products</h2>
   <div className="underline"></div>
   <div className="wrapper-product"> 
   <div className="container-products">
    <div className="product-contain">
         <img src={pair1} alt="" className='pair1'/>
           <h3>Dior Timberland</h3>
         <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$125</h4>
      </div>
      <div className="product-contain">
         <img src={pair2} alt="" className='pair2'/>
             <h3>wood timberland</h3>
      
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
        </div>
        <h4>$225</h4>
     </div>
     <div className="product-contain">
         <img src={pair3} alt="" className='pair3'/>
            <h3>Timberland Lexus</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
        </div>
        <h4>$325</h4>
     </div>
     <div className="product-contain">
         <img src={pair4} alt="" className='pair4'/>
          <h3>Luxco Shoe</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$325</h4>
      </div>
      <div className="product-contain">
         <img src={pair9} alt="" className='pair5'/>
          <h3>Paris Sneaker</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$325</h4>
      </div>
     
     <div className="product-contain">
         <img src={pair6} alt="" className='pair1'/>
          <h3>Italiano Timber</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$325</h4>
      </div>
      </div>
     </div>
     <h2 className='latest-product'>Latest Products</h2>
<div className="underline"></div>
    <div className="wrapper-product">
   <div className="container-products">
    <div className="product-contain">
         <img src={sofa6} alt="" className='pair1'/>
           <h3>Deluxe Sofa</h3>
         <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$125</h4>
      </div>
      <div className="product-contain">
         <img src={sofa7} alt="" className='pair2'/>
             <h3>Luxios Sofa</h3>
      
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
        </div>
        <h4>$225</h4>
     </div>
     <div className="product-contain">
         <img src={sofa8} alt="" className='pair3'/>
            <h3>French Sofa</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
        </div>
        <h4>$325</h4>
     </div>
     <div className="product-contain">
         <img src={sofa9} alt="" className='pair4'/>
          <h3>Italiano Sofa</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$325</h4>
      </div>
      <div className="product-contain">
         <img src={sofa1} alt="" className='pair4'/>
          <h3>Franchesco Sofa</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$325</h4>
      </div>
      <div className="product-contain">
         <img src={sofa3} alt="" className='pair4'/>
          <h3>Milano Sofa</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$325</h4>
      </div>
      <div className="product-contain">
         <img src={sofa4} alt="" className='pair4'/>
          <h3>Venisse Sofa</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$325</h4>
      </div>
      <div className="product-contain">
         <img src={sofa5} alt="" className='pair4'/>
          <h3>Palermo Sofa</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$325</h4>
      </div>
      <div className="product-contain">
         <img src={sofa10} alt="" className='pair4'/>
          <h3>Burgatti Sofa</h3>
        <div className="ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
         <h4>$325</h4>
      </div>
     </div>
     </div>
     <div className="main-container">
       <div className="brand-container">
           <img src={watch2} alt="" className='watch-image'/>
              <div className="article-text">
               <p><b>Exclusively available on GreenStore</b></p>
                <h2>Smart Band 4</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta temporibus minima rerum consequatur quam voluptatem obcaecati eligendi commodi ipsam consequuntur ab beatae exercitationem quia rem, dolor nam odio ut eos!</p>
             <br />
             <button className='band-button'>Buy Now</button>
         </div>
       </div>
      </div>
      <h2 className='client-title'>Clients Points Of Views</h2>
      <div className="underline"></div>
      <div className="client-container">
      <div className="clients-opinion">
          <div className="client">
             <i class="fa fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam quod sequi consequatur culpa odio?</p>
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
          <img src={pico1} alt="" className='client-image'/>
           <h5>Sean Marc</h5>
          </div>
       
      <div className="client">
             <i className="fa fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam quod sequi consequatur culpa odio?</p>
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
          <img src={pico3} alt="" className='client-image'/>
           <h5>Kim Matt</h5>
          </div>
          <div className="client">
             <i class="fa fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam quod sequi consequatur culpa odio?</p>
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
         </div>
          <img src={men} alt="men" className='client-image'/>
           <h5>Lewis Singer</h5>
          </div>
      </div>
      </div>
      <h2 className='sponsor-title'>Our Sponsors</h2>
    <div className="underline"></div>
      <div className="marks">
        <img src={microsoft} alt=""  className='microsoft'/>
        <img src={oppo} alt=""  className='oppo'/>
        <img src={cocacola} alt=""  className='cocacola'/>
        <img src={paypal} alt="" className='paypal'/>
        <img src={philips} alt=""className='philips' />
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

export default Home
