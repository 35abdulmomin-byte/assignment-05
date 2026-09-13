import logoText from './assets/logo-text.png';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="brand">
         <img className="logo-img" src={logoText} alt="DevStack" />
          <span>DevStack</span>
        </div>

        <div className="nav-links">
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