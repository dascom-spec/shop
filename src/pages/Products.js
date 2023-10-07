import React from 'react';
import { ProductLists }  from '../helpers/ProductLists';
import "../styles/Products.css";
import  { useContext } from 'react';
import { CartContext } from '../helpers/Context';



function Products() {

  const{addToCart} =useContext(CartContext)

  return (
    <div className='products'>
       
      <h2 className='product-title'>Our Products Lists</h2>
      <div className="products-wrapper">
       <div className='products-container'>
           {ProductLists.map((product) => (
        <div className="display-products" key={product.id}>
            <div className="image-item">
                <img src={product.image} alt=""  className='product-image'/>
             </div>
            <div className="desc">
              <p>{product.name}</p>
              <p><b>${product.price}</b></p>
            </div>
            <div className="ratings-product">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              </div>
            <div className="cartButton">
                <button className='addButton' onClick={() =>addToCart(product)}>Add To Cart</button>
            </div>
           </div>

         ))}
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

export default Products
