 
import React, { useContext} from 'react'
import { CartContext } from '../helpers/Context'
import "../styles/Cart.css";
import {Link} from "react-router-dom"


//Cart function
const Cart = () => {
 

 const {cartItems,addToCart,removeToCart,clear}=useContext(CartContext);

 const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price,0)

 if(cartItems.length===0){
  return <h3 className='center-cart'>Cart Products Empty</h3>
 }
  
  return (
    <div className="cart">
      {cartItems.map((item) =>( 
         <div className="cart-container" key={item.id}>
           <div className="display-container" key={item.id}>
               <img src={item.image} alt="" className='cart-image' />
           <div className="description">
                <h3>{item.name}</h3>
           </div>
           <div className="price-display">
              {item.quantity} *${item.price}
           </div>
           <div className="button-display">
               <button className='increase-card' onClick={() =>addToCart(item)}>+</button>
               <button className='decrease-card' onClick={() =>removeToCart(item)}>-</button>
           </div>
       </div>
       </div>

      ))}
         <div className="different-button">
             <h3>TOTAL PRICE : <b>${totalPrice}</b></h3>
             <Link to="/Products" className='link-product'>Shopping</Link>
             <button className='clear-button' onClick={clear}>Clear the Cart</button>
        </div>
    </div>

    ) 
}

export default Cart

