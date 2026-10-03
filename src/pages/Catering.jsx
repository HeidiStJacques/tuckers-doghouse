import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Catering.css";

function Catering() {
  return (
    <>
      <Helmet>
        <title>
          Catering & Events | Tucker's Dog House
        </title>

        <meta
          name="description"
          content="Bring Tucker's Dog House to your next event. Hot dogs, fresh lemonade, and good times for employee appreciation events, parties, gatherings, and community events throughout New England."
        />

        <link
          rel="canonical"
          href="https://www.tuckersdoghousenh.com/catering"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Catering & Events | Tucker's Dog House"
        />

        <meta
          property="og:description"
          content="Bring Tucker's Dog House to your event for hot dogs, fresh lemonade, and good times at workplace celebrations, parties, gatherings, and community events."
        />

        <meta
          property="og:url"
          content="https://www.tuckersdoghousenh.com/catering"
        />

        <meta
          property="og:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />

        {/* Social Sharing */}
        <meta
          name="twitter:title"
          content="Catering & Events | Tucker's Dog House"
        />

        <meta
          name="twitter:description"
          content="Bring Tucker's Dog House to your next event for hot dogs, fresh lemonade, and good times."
        />

        <meta
          name="twitter:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />
      </Helmet>

      <main className="catering-page">
        <section className="catering-card">

          {/* HERO */}
          <div className="catering-hero">
            <p className="catering-kicker">
              Hot Dogs. Lemonade. Good Times.
            </p>

            <h1>
              Bring Tucker
              <span> to You!</span>
            </h1>

            <p className="catering-intro">
              Got something coming up? Tucker's Doghouse can bring the fun,
              the food, and the fresh lemonade to your event.
            </p>

            <Link
              to="/contact"
              className="catering-hero-button"
            >
              Let's Talk About Your Event
            </Link>
          </div>

          {/* DIVIDER */}
          <div className="catering-divider">
            <span>🌭</span>
            <span className="catering-divider-line"></span>
            <span>🐾</span>
            <span className="catering-divider-line"></span>
            <span>🍋</span>
          </div>

          {/* EVENT TYPES */}
          <div className="catering-section-heading">
            <p className="catering-small-kicker">
              Tucker's On the Road
            </p>

            <h2>What's the Occasion?</h2>

            <p>
              From workplace celebrations to special gatherings, tell us
              what you're planning and we'll see if Tucker's is a good fit.
            </p>
          </div>

          <div className="catering-options">

            <article className="catering-option">
              <span className="catering-option-icon">
                🏢
              </span>

              <h3>Employee Appreciation</h3>

              <p>
                Give your team something to look forward to with hot dogs,
                fresh lemonade, and a visit from Tucker's Doghouse.
              </p>
            </article>

            <article className="catering-option catering-option-fawn">
              <span className="catering-option-icon">
                🎉
              </span>

              <h3>Parties & Gatherings</h3>

              <p>
                Planning something special? Tell us about your gathering
                and what you have in mind.
              </p>
            </article>

            <article className="catering-option catering-option-green">
              <span className="catering-option-icon">
                🌭
              </span>

              <h3>Community Events</h3>

              <p>
                Bringing people together? Tucker's Doghouse loves being
                part of a good time.
              </p>
            </article>

          </div>

          {/* INFO PLACEHOLDER */}
          <div className="catering-details">
            <div className="catering-details-content">
              <p className="catering-small-kicker">
                The Details
              </p>

              <h2>
                Tell Us What You've Got Planned.
              </h2>

              <p>
                Every event is a little different. Send us the date,
                location, estimated number of guests, and a few details
                about your event so we can talk about what might work.
              </p>
            </div>

            <div className="catering-details-note">
              <span>🐾</span>

              <p>
                More information about catering options, service area,
                availability, and event details is coming soon.
              </p>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="catering-cta">
            <p className="catering-cta-kicker">
              Sounds Like a Good Time?
            </p>

            <h2>
              Let's Bring Tucker to You!
            </h2>

            <p>
              Drop us a line and tell us a little about your event.
            </p>

            <Link
              to="/contact"
              className="catering-cta-button"
            >
              Get in Touch
            </Link>
          </div>

        </section>
      </main>
    </>
  );
}

export default Catering;
