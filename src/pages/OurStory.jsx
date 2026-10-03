import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./OurStory.css";

function OurStory() {
  return (
    <>
      <Helmet>
        <title>
          Our Story | Tucker's Dog House
        </title>

        <meta
          name="description"
          content="Meet Tucker's Dog House, a Loudon, New Hampshire-based mobile food vendor bringing hot dogs, fresh lemonade, and good times to fairs, festivals, and events throughout New England."
        />

        <link
          rel="canonical"
          href="https://www.tuckersdoghousenh.com/our-story"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Our Story | Tucker's Dog House"
        />

        <meta
          property="og:description"
          content="Learn more about Tucker's Dog House and the story behind the hot dogs, fresh lemonade, and very good dog."
        />

        <meta
          property="og:url"
          content="https://www.tuckersdoghousenh.com/our-story"
        />

        <meta
          property="og:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />

        {/* Social Sharing */}
        <meta
          name="twitter:title"
          content="Our Story | Tucker's Dog House"
        />

        <meta
          name="twitter:description"
          content="Learn more about Tucker's Dog House and the story behind the hot dogs, fresh lemonade, and very good dog."
        />

        <meta
          name="twitter:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />
      </Helmet>

      <main className="our-story-page">
        <section className="story-card">
          <div className="story-intro">
            <p className="story-kicker">Our Story</p>

            <h1>
              Good Food. Good Times.
              <span> One Very Good Dog.</span>
            </h1>

            <p className="story-lead">
              Tucker's Doghouse is all about keeping things simple: good food,
              fresh lemonade, friendly faces, and a little fun wherever we go.
            </p>
          </div>

          <div className="story-divider">
            <span>🌭</span>
            <span className="divider-line"></span>
            <span>🐾</span>
            <span className="divider-line"></span>
            <span>🍋</span>
          </div>

          <div className="story-grid">
            <div className="story-section">
              <p className="story-number">01</p>

              <h2>How It Started</h2>

              <p>
                There's a story behind Tucker's Doghouse, and we're saving this
                spot for the people who know it best. Check back soon to learn
                how Tucker's got rolling.
              </p>
            </div>

            <div className="story-section story-section-fawn">
              <p className="story-number">02</p>

              <h2>The Original Tucker</h2>

              <p>
                Tucker is the very good dog behind the name. We'll share more
                about the four-legged inspiration behind Tucker's Doghouse and
                how he became part of the story.
              </p>
            </div>

            <div className="story-section story-section-green">
              <p className="story-number">03</p>

              <h2>Out & About</h2>

              <p>
                From fairs and festivals to catered gatherings and employee
                appreciation events, Tucker's Doghouse brings hot dogs, fresh
                lemonade, and a good time wherever we go.
              </p>
            </div>
          </div>

          <div className="story-cta">
            <p className="story-cta-kicker">
              Ready for a good time?
            </p>

            <h2>
              Find Tucker — or bring Tucker to you.
            </h2>

            <div className="story-buttons">
              <Link
                to="/find-us"
                className="story-button story-button-pink"
              >
                Where's Tucker?
              </Link>

              <Link
                to="/catering"
                className="story-button story-button-yellow"
              >
                Bring Tucker to You!
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default OurStory;
