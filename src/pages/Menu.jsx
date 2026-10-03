import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <>
      <Helmet>
        <title>
          Menu | Tucker's Dog House | Hot Dogs & Lemonade
        </title>

        <meta
          name="description"
          content="Check out the Tucker's Dog House menu featuring hot dogs, fresh lemonade, and more at fairs, festivals, and events throughout New England."
        />

        <link
          rel="canonical"
          href="https://www.tuckersdoghousenh.com/menu"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Menu | Tucker's Dog House"
        />

        <meta
          property="og:description"
          content="Hot dogs, fresh lemonade, and more from Tucker's Dog House at fairs, festivals, and events throughout New England."
        />

        <meta
          property="og:url"
          content="https://www.tuckersdoghousenh.com/menu"
        />

        <meta
          property="og:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />

        {/* Social Sharing */}
        <meta
          name="twitter:title"
          content="Menu | Tucker's Dog House"
        />

        <meta
          name="twitter:description"
          content="Hot dogs, fresh lemonade, and more from Tucker's Dog House at fairs, festivals, and events throughout New England."
        />

        <meta
          name="twitter:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />
      </Helmet>

      <main className="menu-page">
        <section className="menu-card">

          {/* HEADER */}
          <div className="menu-heading">
            <p className="menu-kicker">
              Hot Dogs. Cold Lemonade. No Fuss.
            </p>

            <h1>
              What's Cookin' at
              <span> the Doghouse?</span>
            </h1>

            <p className="menu-intro">
              Tucker's Doghouse keeps things simple, tasty, and ready for a
              good time. Our full menu is coming soon!
            </p>
          </div>

          {/* DIVIDER */}
          <div className="menu-divider">
            <span>🌭</span>
            <span className="menu-divider-line"></span>
            <span>🐾</span>
            <span className="menu-divider-line"></span>
            <span>🍋</span>
          </div>

          {/* HOT DOGS */}
          <section className="menu-section">
            <div className="menu-section-heading">
              <div className="menu-section-icon">🌭</div>

              <div>
                <p className="menu-small-kicker">From the Doghouse</p>
                <h2>Hot Dogs</h2>
              </div>
            </div>

            <div className="menu-placeholder">
              <p className="menu-placeholder-title">
                The Dogs Are Coming...
              </p>

              <p>
                We're getting the full lineup ready. Hot dog choices,
                toppings, and prices will be added here soon.
              </p>
            </div>
          </section>

          {/* LEMONADE */}
          <section className="menu-section menu-section-lemon">
            <div className="menu-section-heading">
              <div className="menu-section-icon">🍋</div>

              <div>
                <p className="menu-small-kicker">Fresh & Cold</p>
                <h2>Fresh Lemonade</h2>
              </div>
            </div>

            <div className="menu-placeholder">
              <p className="menu-placeholder-title">
                Squeeze the Day!
              </p>

              <p>
                Lemonade options, flavors, sizes, and prices will be added
                as soon as the official menu is ready.
              </p>
            </div>
          </section>

          {/* EXTRAS */}
          <section className="menu-section menu-section-green">
            <div className="menu-section-heading">
              <div className="menu-section-icon">🐾</div>

              <div>
                <p className="menu-small-kicker">
                  A Little Something Extra
                </p>

                <h2>More from Tucker's</h2>
              </div>
            </div>

            <div className="menu-placeholder">
              <p className="menu-placeholder-title">
                Stay Tuned!
              </p>

              <p>
                If Tucker's has sides, snacks, specials, or other goodies,
                you'll find them right here.
              </p>
            </div>
          </section>

          {/* MENU NOTE */}
          <div className="menu-note">
            <span>🐾</span>

            <p>
              Menu items, availability, and pricing may vary by event.
              Check back for the official Tucker's Doghouse menu.
            </p>
          </div>

          {/* CTA */}
          <div className="menu-cta">
            <div>
              <p className="menu-cta-kicker">
                Getting Hungry?
              </p>

              <h2>
                Come See What All the Barking's About.
              </h2>

              <p>
                Find Tucker's next stop and grab a hot dog and a cold
                lemonade.
              </p>
            </div>

            <Link to="/find-us" className="menu-cta-button">
              Where's Tucker?
            </Link>
          </div>

        </section>
      </main>
    </>
  );
}

export default Menu;
