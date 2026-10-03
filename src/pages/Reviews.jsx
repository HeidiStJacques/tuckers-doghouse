import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Reviews.css";

function Reviews() {
  return (
    <>
      <Helmet>
        <title>
          Reviews | Tucker's Dog House
        </title>

        <meta
          name="description"
          content="See what customers are saying about Tucker's Dog House and our hot dogs, fresh lemonade, and visits to fairs, festivals, and events throughout New England."
        />

        <link
          rel="canonical"
          href="https://www.tuckersdoghousenh.com/reviews"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Reviews | Tucker's Dog House"
        />

        <meta
          property="og:description"
          content="See what folks have to say about Tucker's Dog House, our hot dogs, fresh lemonade, and good times at events throughout New England."
        />

        <meta
          property="og:url"
          content="https://www.tuckersdoghousenh.com/reviews"
        />

        <meta
          property="og:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />

        {/* Social Sharing */}
        <meta
          name="twitter:title"
          content="Reviews | Tucker's Dog House"
        />

        <meta
          name="twitter:description"
          content="See what folks have to say about Tucker's Dog House, our hot dogs, fresh lemonade, and good times at events throughout New England."
        />

        <meta
          name="twitter:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />
      </Helmet>

      <main className="reviews-page">
        <section className="reviews-card">

          {/* HEADER */}
          <div className="reviews-heading">
            <p className="reviews-kicker">
              Pawsitive Feedback
            </p>

            <h1>
              The Word Around
              <span> the Doghouse</span>
            </h1>

            <p className="reviews-intro">
              Good food, fresh lemonade, and good times are what Tucker's
              Doghouse is all about. This is where we'll share what folks
              have to say after stopping by.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="reviews-divider">
            <span>🐾</span>
            <span className="reviews-divider-line"></span>
            <span>🌭</span>
            <span className="reviews-divider-line"></span>
            <span>🍋</span>
          </div>

          {/* REVIEWS PLACEHOLDER */}
          <div className="reviews-coming-soon">

            <div className="reviews-coming-icon">
              🐾
            </div>

            <p className="reviews-small-kicker">
              The Doghouse Is Listening
            </p>

            <h2>
              Reviews Coming Soon!
            </h2>

            <p>
              We're getting this spot ready for kind words from the folks
              who've visited Tucker's Doghouse. Check back soon to see what
              everyone's barking about.
            </p>

          </div>

          {/* FUTURE REVIEW CARDS */}
          <div className="reviews-preview">

            <article className="review-placeholder-card">
              <div className="review-stars">
                ★★★★★
              </div>

              <p>
                Customer reviews will have a home right here.
              </p>

              <span>
                — Tucker's Customer
              </span>
            </article>

            <article className="review-placeholder-card review-placeholder-fawn">
              <div className="review-stars">
                ★★★★★
              </div>

              <p>
                We'll add real feedback as soon as it's available.
              </p>

              <span>
                — Tucker's Customer
              </span>
            </article>

            <article className="review-placeholder-card review-placeholder-green">
              <div className="review-stars">
                ★★★★★
              </div>

              <p>
                Good words from good folks are coming soon.
              </p>

              <span>
                — Tucker's Customer
              </span>
            </article>

          </div>

          {/* CTA */}
          <div className="reviews-cta">
            <div>
              <p className="reviews-cta-kicker">
                Haven't Tried Tucker's Yet?
              </p>

              <h2>
                Come See What All the Barking's About.
              </h2>
            </div>

            <div className="reviews-buttons">
              <Link
                to="/find-us"
                className="reviews-button reviews-button-pink"
              >
                Where's Tucker?
              </Link>

              <Link
                to="/catering"
                className="reviews-button reviews-button-yellow"
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

export default Reviews;
