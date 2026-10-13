import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

function SiteFooter() {
  return (
    <footer className="home-footer">
      <div className="footer-main">
        <Link className="footer-brand" to="/">
          <img
            className="footer-brand-logo"
            src="/global-translation-logo.svg"
            alt="Global Translation Services"
          />
        </Link>
        <div className="footer-contact">
          <span className="eyebrow">Let’s connect</span>
          <h2>Need a hand with your next translation?</h2>
          <Link to="/contact">hello@globaltranslationservices.com</Link>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Explore</span>
          <Link to="/services">Our services</Link>
          <Link to="/about">About us</Link>
          <Link to="/blog">Latest articles</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <nav aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <span>© {currentYear} Global Translation Services</span>
      </div>
    </footer>
  )
}

export default SiteFooter
