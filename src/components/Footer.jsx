const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a leading e-commerce company providing the best products at the best prices.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="/instagram-icon.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
