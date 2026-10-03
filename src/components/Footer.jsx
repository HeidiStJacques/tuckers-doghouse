import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="footer-card">

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Tucker's Doghouse
            </Link>

            <p className="footer-tagline">
              Hot dogs, cold lemonade & good times.
            </p>

            <p className="footer-trail">
              Stay hungry. Stay thirsty.
              <br />
              <span>Stay on Tucker's trail.</span>
            </p>
          </div>

          {/* EXPLORE */}
          <div className="footer-links">
            <p className="footer-heading">Explore</p>

            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/our-story">Our Story</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* FIND TUCKER */}
          <div className="footer-links">
            <p className="footer-heading">Track Tucker</p>

            <Link to="/find-us">Where's Tucker?</Link>
            <Link to="/catering">Catering</Link>

            <div className="footer-social">
              <p>Follow along for stops, events & more.</p>

              <div className="footer-social-placeholder">
                Social links coming soon
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="footer-cta">
            <p className="footer-cta-kicker">
              Got Something Planned?
            </p>

            <h2>Bring Tucker to You!</h2>

            <p>
              Tell us about your event and let's see if Tucker's
              Doghouse can join the fun.
            </p>

            <Link to="/catering" className="footer-cta-button">
              Let's Talk Events
            </Link>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Tucker's Doghouse. All rights reserved.
          </p>

          <p className="footer-paw">
            Made with a little 🐾 and a lot of lemonade.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
