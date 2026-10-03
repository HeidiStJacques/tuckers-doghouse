import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import "./Home.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Tucker's Dog House | Hot Dogs & Lemonade at New England Events
        </title>

        <meta
          name="description"
          content="Tuckers Dog House - hot dogs & lemonade at fairs and festivals throughout New England"
        />

        <link
          rel="canonical"
          href="https://www.tuckersdoghousenh.com/"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Tucker's Dog House | Hot Dogs & Lemonade"
        />

        <meta
          property="og:description"
          content="Tuckers Dog House - hot dogs & lemonade at fairs and festivals throughout New England"
        />

        <meta
          property="og:url"
          content="https://www.tuckersdoghousenh.com/"
        />

        <meta
          property="og:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />

        {/* Social Sharing */}
        <meta
          name="twitter:title"
          content="Tucker's Dog House | Hot Dogs & Lemonade"
        />

        <meta
          name="twitter:description"
          content="Tuckers Dog House - hot dogs & lemonade at fairs and festivals throughout New England"
        />

        <meta
          name="twitter:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />
      </Helmet>

      <main className="home">

        {/* =========================
            HERO
        ========================= */}

        <section className="hero-card">
          <div className="hero-content">
            <p className="hero-kicker">Paws Down the Best</p>

            <h1>
              Hot Dogs.
              <br />
              Cold Lemonade.
              <br />
              <span>One Good Dog.</span>
            </h1>

            <p className="hero-description">
              Serving up tasty hot dogs, fresh-squeezed lemonade, and good
              times at fairs, festivals, and events around New England.
            </p>

            <div className="hero-buttons">
              <Link to="/menu" className="hero-button hero-button-primary">
                See the Menu
              </Link>

              <Link
                to="/find-us"
                className="hero-button hero-button-secondary"
              >
                Where's Tucker?
              </Link>
            </div>
          </div>

          <div className="hero-logo">
            <img
              src={Logo}
              alt="Tucker's Doghouse - Hot Dogs and Fresh Lemonade"
            />
          </div>
        </section>

        {/* =========================
            WELCOME TO THE DOGHOUSE
        ========================= */}

        <section className="home-intro">
          <div className="home-intro-heading">
            <p className="home-section-kicker">
              Welcome to the Doghouse
            </p>

            <h2>
              Good Eats. Cold Drinks.
              <span> Wherever Tucker Goes.</span>
            </h2>

            <p>
              Tucker's Doghouse brings hot dogs, fresh lemonade, and a little
              personality to fairs, festivals, community events, and
              gatherings around New England.
            </p>
          </div>

          <div className="home-feature-grid">

            {/* HOT DOGS */}

            <article className="home-feature home-feature-pink">
              <div className="home-feature-icon">🌭</div>

              <p className="home-feature-number">01</p>

              <h3>Hot Dogs</h3>

              <p>
                Simple, tasty food made for fairs, festivals, and good times.
              </p>

              <Link to="/menu" className="home-feature-link">
                See What's Cookin' →
              </Link>
            </article>

            {/* LEMONADE */}

            <article className="home-feature home-feature-yellow">
              <div className="home-feature-icon">🍋</div>

              <p className="home-feature-number">02</p>

              <h3>Fresh Lemonade</h3>

              <p>
                Cold, fresh lemonade that's right at home alongside a good
                dog.
              </p>

              <Link to="/menu" className="home-feature-link">
                See the Menu →
              </Link>
            </article>

            {/* ON THE MOVE */}

            <article className="home-feature home-feature-green">
              <div className="home-feature-icon">🐾</div>

              <p className="home-feature-number">03</p>

              <h3>On the Move</h3>

              <p>
                Follow Tucker's trail around New England and see where the
                Doghouse is headed next.
              </p>

              <Link to="/find-us" className="home-feature-link">
                Track Down Tucker →
              </Link>
            </article>

          </div>
        </section>

      </main>
    </>
  );
}

export default Home;
