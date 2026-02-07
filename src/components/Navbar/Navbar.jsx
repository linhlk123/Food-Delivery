import React, {useState} from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css' 
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='logo' className='logo' />
      <ul className='navbar-menu'>
        <Link to="/"><li onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>home</li></Link>
        <li onClick={() => setMenu("about")} className={menu === 'about' ? 'active' : ''}>about</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</li>
        <li onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? 'active' : ''}>contact</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search icon" />
        <div className='navbar-search-icon'>  
          <Link to="/cart"><img src={assets.basket_icon} alt="basket icon" /></Link>
          <div className='dot'></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>
    </div>
  )
}

export default Navbar;
