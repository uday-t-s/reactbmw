import React, { useReducer, useState } from "react";
import carsData from "../carsData";

const initialState = {
  name: "",
  email: "",
  model: "",
  message: "",
};

function formReducer(state, action) {
  return {
    ...state,
    [action.field]: action.value,
  };
}

const categoryLabels = {
  sedans: "Sedans",
  suvs: "SUVs",
  "m-series": "M Series",
};

export default function Contact() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [formError, setFormError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.message) {
      setFormError("Please fill all the fields.");
      setSent(false);
      return;
    }
    setFormError("");
    setSent(true);
    dispatch({ field: "name", value: "" });
    dispatch({ field: "email", value: "" });
    dispatch({ field: "model", value: "" });
    dispatch({ field: "message", value: "" });
  };

  return (
    <div>
      <h2>Contact us</h2>
      <div className="contact-layout">
        <div className="contact-info">
          <h3>Showroom</h3>
          <div className="contact-info-row">
            <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p>MG Road, Bangalore, Karnataka</p>
          </div>
          <div className="contact-info-row">
            <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 5h16v14H4z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <a href="mailto:bmwmodel@gmail.com">bmwmodel@gmail.com</a>
          </div>
          <div className="contact-info-row">
            <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8a15.4 15.4 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <a href="tel:+916362601745">+91 6362601745</a>
          </div>
          <div className="contact-info-row">
            <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p>Mon - Sat, 9:00 AM - 7:00 PM</p>
          </div>
          <div className="contact-info-row">
            <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p>Closed on public holidays</p>
          </div>

          <h3 className="contact-info-subheading">Other ways to reach us</h3>
          <div className="contact-info-row">
            <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M21 11.5a8.5 8.5 0 1 1-4.1-7.3L21 3l-1.2 4.1a8.46 8.46 0 0 1 1.2 4.4z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <a href="https://wa.me/916362601745">WhatsApp: +91 6362601745</a>
          </div>
          <div className="contact-info-row">
            <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
            </svg>
            <a
              href="https://www.google.com/maps/search/?api=1&query=MG+Road+Bangalore+Karnataka"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={state.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={state.email}
            onChange={handleChange}
          />
          <select name="model" value={state.model} onChange={handleChange}>
            <option value="">Which model are you interested in? (optional)</option>
            {Object.keys(categoryLabels).map((category) => (
              <optgroup label={categoryLabels[category]} key={category}>
                {carsData
                  .filter((car) => car.category === category)
                  .map((car) => (
                    <option value={car.name} key={car.id}>
                      BMW {car.name}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Your message"
            value={state.message}
            onChange={handleChange}
          />
          {formError && <p className="error-text">{formError}</p>}
          {sent && <p className="success-text">Thanks! We will get back to you soon.</p>}
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}
