import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const form = event.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      "subject",
      "New Message from Tucker's Dog House Website"
    );

    formData.append(
      "from_name",
      "Tucker's Dog House Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus(
          "Thanks! Your message has been sent to the Doghouse."
        );

        form.reset();
      } else {
        setStatus(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Contact | Tucker's Dog House
        </title>

        <meta
          name="description"
          content="Contact Tucker's Dog House about fairs, festivals, catering, private events, employee appreciation events, or upcoming stops throughout New England."
        />

        <link
          rel="canonical"
          href="https://www.tuckersdoghousenh.com/contact"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact | Tucker's Dog House"
        />

        <meta
          property="og:description"
          content="Get in touch with Tucker's Dog House about upcoming stops, catering, fairs, festivals, and events throughout New England."
        />

        <meta
          property="og:url"
          content="https://www.tuckersdoghousenh.com/contact"
        />

        <meta
          property="og:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />

        {/* Social Sharing */}
        <meta
          name="twitter:title"
          content="Contact | Tucker's Dog House"
        />

        <meta
          name="twitter:description"
          content="Get in touch with Tucker's Dog House about upcoming stops, catering, fairs, festivals, and events throughout New England."
        />

        <meta
          name="twitter:image"
          content="https://www.tuckersdoghousenh.com/og-image.png"
        />
      </Helmet>

      <main className="contact-page">
        <section className="contact-card">

          <div className="contact-heading">
            <p className="contact-kicker">
              Questions? Events? Just Wanna Say Hi?
            </p>

            <h1>
              Give Us a <span>Holler!</span>
            </h1>

            <p className="contact-intro">
              Whether you're looking for Tucker's next stop, planning an event,
              or just have a question, we'd love to hear from you.
            </p>
          </div>

          <div className="contact-content">

            <div className="contact-form-wrap">
              <div className="contact-form-heading">
                <p className="contact-small-label">
                  Drop Us a Line
                </p>

                <h2>What's on your mind?</h2>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="reason">
                    What can we help with?
                  </label>

                  <select
                    id="reason"
                    name="reason"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Pick one
                    </option>

                    <option value="General Question">
                      General Question
                    </option>

                    <option value="Catering & Events">
                      Catering & Events
                    </option>

                    <option value="Where's Tucker?">
                      Where's Tucker?
                    </option>

                    <option value="Something Else">
                      Something Else
                    </option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="message">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us what's up..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send It Our Way!"}
                </button>

                {status && (
                  <p className="contact-form-status">
                    {status}
                  </p>
                )}

              </form>
            </div>

            <aside className="contact-side">

              <div className="contact-callout">
                <p className="contact-small-label">
                  Planning Something?
                </p>

                <h2>Bring Tucker to You!</h2>

                <p>
                  Planning a company event, employee appreciation day, party,
                  or special gathering? Tell us what you've got in mind.
                </p>

                <Link
                  to="/catering"
                  className="contact-catering-button"
                >
                  Catering & Events
                </Link>
              </div>

              <div className="contact-info">
                <p className="contact-small-label">
                  Stay in the Loop
                </p>

                <h3>Follow Tucker</h3>

                <p>
                  Follow along for upcoming stops, events, and all things
                  Tucker's Doghouse.
                </p>

                <div className="contact-social-placeholder">
                  Social links coming soon!
                </div>
              </div>

            </aside>

          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
