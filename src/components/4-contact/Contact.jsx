import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("movvyavz");

  return (
    <section id="Contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact Me
      </h1>

      <p className="sub-title">
        Feel free to contact me for collaborations, freelance projects, or
        professional opportunities.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              aria-autocomplete="none"
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              placeholder="your.email@example.com"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Write your message here..."
            ></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "16px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 35 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>

        <div className="animation" aria-hidden="true">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;