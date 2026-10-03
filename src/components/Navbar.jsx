import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrap">
      <div className="navbar-card">

        <NavLink
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          Tucker's Doghouse
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/our-story">Our Story</NavLink>
          <NavLink to="/find-us">Find Us</NavLink>
          <NavLink to="/catering">Catering</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="navbar-actions">
          <NavLink to="/find-us" className="wheres-tucker">
            Where's Tucker?
          </NavLink>

          <button
            type="button"
            className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <nav
          className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
          aria-label="Mobile navigation"
        >
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/menu" onClick={closeMenu}>
            Menu
          </NavLink>

          <NavLink to="/our-story" onClick={closeMenu}>
            Our Story
          </NavLink>

          <NavLink to="/find-us" onClick={closeMenu}>
            Find Us
          </NavLink>

          <NavLink to="/catering" onClick={closeMenu}>
            Catering
          </NavLink>

          <NavLink to="/reviews" onClick={closeMenu}>
            Reviews
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink
            to="/catering"
            className="mobile-catering-button"
            onClick={closeMenu}
          >
            Bring Tucker to You!
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
