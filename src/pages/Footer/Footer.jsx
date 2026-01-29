import "./Footer.scss";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* CTA BOX */}
      <div className="footer-cta">
        <h2>Ready to Start Your Learning Journey?</h2>
        <p>
          Join thousands of students who have enhanced their trading knowledge
          with our structured programs.
        </p>

        <div className="cta-actions">
          <Link to="/coursess">
            <Button variant="primary">Start Your Journey →</Button>
          </Link>

          <Link to="/about">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="footer-content">
        {/* LEFT */}
        <div className="footer-brand">
          <div className="logo">
            <img src="/logo.png" alt="TradeHub" />
            <span>TradeHub</span>
          </div>

          <p>
            Professional trading education platform empowering traders with
            structured learning, mentorship, and real market exposure.
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-social">
          <span>Follow us</span>
          <div className="icons">
            <a href="#" aria-label="Instagram">
              📸
            </a>
            <a href="#" aria-label="Email">
              ✉️
            </a>
          </div>
        </div>
      </div>

      {/* LINKS */}
      <div className="footer-links">
        <Link to="#">Terms & Conditions</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Shipping Policy</Link>
        <Link to="#">Cancellation & Refund</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-copy">© 2026 TradeHub. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
