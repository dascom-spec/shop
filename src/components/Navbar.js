import { useContext } from 'react';
import React,{useState} from 'react';
import {Link, useLocation} from  "react-router-dom";
import "../styles/Navbar.css";
import { CartContext } from '../helpers/Context';
import cartIcon from "../assets/cart-icon.png"
import { useEffect } from 'react';

function Navbar() {
 
  const[navLink, setNavLink] = useState(false);

 const{cartItems} = useContext(CartContext)

  const update = ()=>{
    setNavLink(!navLink)
  }


  const location =useLocation()

  useEffect(()=>{
    setNavLink(false)
  },[location])




  return (
  <header>
  <div className="header-container">
    <nav>
      <div className="logo">
        <h2>kik<span className='store'>store</span></h2>
      </div>
      <div className="open-button" onClick={update}><i class="fa fa-bars"></i></div>

      
      <div className="nav-links" id={navLink ? "hidden" : ""}> 
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Cart"><img src={cartIcon} alt="cartIcon" className='cartIcon'/>({cartItems.length} )</Link>
      </div>
  </nav>
  </div>
</header>
  )
}

export default Navbar
