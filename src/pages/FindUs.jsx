import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./FindUs.css";

function FindUs() {
  return (
    <>
      <Helmet>
        <title>
          Find Us | Tucker's Dog House | Fairs & Festivals
        </title>

        <meta
          name="description"
          content="Find Tucker's Dog House at upcoming fairs, festivals, and events throughout New England. See where Tucker is headed next for hot dogs and fresh lemonade."
        />

        <link
          rel="canonical"
          href="https://www.tuckersdoghousenh.com/find-us"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Find Tucker's Dog House | Upcoming Events"
        />

        <meta
          property="og:description"
          content="See where Tucker's Dog House is headed next. Find us serving hot dogs and fresh lemonade at fairs, festivals, and events throughout New England."
        />

        <meta
          property="og:url"
          content="https://www.tuckersdoghousenh.com/find-us"
        />

        <meta
          property="og:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />

        {/* Social Sharing */}
        <meta
          name="twitter:title"
          content="Find Tucker's Dog House | Upcoming Events"
        />

        <meta
          name="twitter:description"
          content="See where Tucker's Dog House is headed next for hot dogs and fresh lemonade at fairs, festivals, and events throughout New England."
        />

        <meta
          name="twitter:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />
      </Helmet>

      <main className="find-us-page">
        <section className="find-us-card">

          {/* HEADER */}
          <div className="find-us-heading">
            <p className="find-us-kicker">
              Hot Dogs & Lemonade on the Move
            </p>

            <h1>
              Track Down
              <span> Tucker!</span>
            </h1>

            <p className="find-us-intro">
              Tucker's Doghouse is out and about at fairs, festivals, and
              events around New England. Check out where we're headed next
              and come see what all the barking's about.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="find-us-divider">
            <span>🌭</span>
            <span className="find-us-divider-line"></span>
            <span>🐾</span>
            <span className="find-us-divider-line"></span>
            <span>🍋</span>
          </div>

          {/* UPCOMING EVENTS */}
          <div className="find-us-section-heading">
            <p className="find-us-small-kicker">
              Where's Tucker?
            </p>

            <h2>Upcoming Stops</h2>

            <p>
              Our upcoming schedule will be posted right here, so you'll
              always know where to find us.
            </p>
          </div>

          {/* EMPTY STATE */}
          <div className="find-us-coming-soon">
            <div className="find-us-coming-icon">
              🐾
            </div>

            <p className="find-us-small-kicker">
              Tucker's Getting Ready to Roll
            </p>

            <h2>New Stops Coming Soon!</h2>

            <p>
              We're getting the next round of fairs, festivals, and events
              lined up. Check back soon to see where Tucker's Doghouse is
              headed next.
            </p>
          </div>

          {/* FUTURE EVENT CARD EXAMPLES */}
          <div className="find-us-events">

            <article className="find-us-event">
              <div className="find-us-event-date">
                <span className="find-us-event-month">
                  DATE
                </span>

                <span className="find-us-event-day">
                  —
                </span>
              </div>

              <div className="find-us-event-info">
                <p className="find-us-event-label">
                  Upcoming Stop
                </p>

                <h3>Event Coming Soon</h3>

                <p>
                  Location and event details will be added here.
                </p>
              </div>
            </article>

            <article className="find-us-event find-us-event-fawn">
              <div className="find-us-event-date">
                <span className="find-us-event-month">
                  DATE
                </span>

                <span className="find-us-event-day">
                  —
                </span>
              </div>

              <div className="find-us-event-info">
                <p className="find-us-event-label">
                  Upcoming Stop
                </p>

                <h3>More Tucker on the Way</h3>

                <p>
                  Another event will be added as soon as it's announced.
                </p>
              </div>
            </article>

          </div>

          {/* CATERING CTA */}
          <div className="find-us-cta">
            <div>
              <p className="find-us-cta-kicker">
                Can't Wait for Tucker to Come to Town?
              </p>

              <h2>Bring Tucker to You!</h2>

              <p>
                Planning an event, celebration, or employee appreciation day?
                Tell us what you've got in mind.
              </p>
            </div>

            <Link
              to="/catering"
              className="find-us-cta-button"
            >
              Catering & Events
            </Link>
          </div>

        </section>
      </main>
    </>
  );
}

export default FindUs;
