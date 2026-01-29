import { Link } from "react-router-dom";
import "./Navbar.scss";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>
            Trade<span>Hub</span>
          </h1>
        </div>

        {/* Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/coursess">Courses</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="nav-cta">
          <Link to="/coursess">
            <Button variant="primary">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
