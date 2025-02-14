import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Ensure correct import if inside src/assets
import styles from './header.module.css';  // Correct import for CSS module
import { Link } from "react-router-dom";


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle navbar visibility
  };

  return (
    <header className={styles.header}>
      <img 
        src={logo} 
        alt="Logo" 
        className={styles.logo}
      />
      {/* Burger Menu */}
      <div 
        className={`${styles.burgerMenu} ${isNavOpen ? styles.active : ''}`} 
        onClick={toggleNav}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Navbar */}
      <nav className={`${styles.navbar} ${isNavOpen ? styles.active : ''}`}>
        <ul>
        <li><Link to=""
        style={{ color: '#004D43', textDecoration: 'none', fontSize: '18px' }}
        className="link">Home</Link></li>
          <li><Link to="./recipesView" style={{ color: '#004D43', textDecoration: 'none', fontSize: '18px' }}
          className="link">Recipes</Link></li>
          <li><Link to="./favouritesView" style={{ color: '#004D43', textDecoration: 'none', fontSize: '18px' }}
          className="link">Favorites</Link></li>
          <li><Link to="./aboutView" style={{ color: '#004D43', textDecoration: 'none', fontSize: '18px' }}
           className="link">About</Link></li>
          <li><Link to="./contactView" style={{ color: '#004D43', textDecoration: 'none', fontSize: '18px' }}
          className="link">Contact</Link></li>

        </ul>
      </nav>
    </header>
  );
}