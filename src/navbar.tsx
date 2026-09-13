import { useState } from 'react';
import logoText from './assets/logo-text.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <div className="brand">
          <img className="logo-img" src={logoText} alt="DevStack" />
      
        </div>

   
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#" className="active-link">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;