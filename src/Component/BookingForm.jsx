import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../Slice/bookingSlice";

export default function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [date, setDate] = useState("");
  const [contactMethod, setContactMethod] = useState("Email");
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();
  const firstNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !model || !date) {
      setFormError("Please fill all the fields.");
      return;
    }
    setFormError("");
    dispatch(
      addBooking({
        firstName,
        lastName,
        email,
        phone,
        model,
        date,
        contactMethod,
        id: Date.now(),
      }),
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setModel("");
    setDate("");
    setContactMethod("Email");
    firstNameRef.current.focus();
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book a test drive</h2>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        type="text"
        ref={firstNameRef}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="model">Model</label>
      <select id="model" value={model} onChange={(e) => setModel(e.target.value)}>
        <option value="">Select a model</option>
        <option value="3 Series">3 Series</option>
        <option value="5 Series">5 Series</option>
        <option value="X1">X1</option>
        <option value="X3">X3</option>
        <option value="X5">X5</option>
        <option value="M3">M3</option>
        <option value="M5">M5</option>
      </select>
      <label htmlFor="date">Preferred date</label>
      <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <p className="contact-method-label">Preferred contact method</p>
      <div className="contact-method-options">
        {["Email", "Call", "Text"].map((method) => (
          <label className="contact-method-option" key={method}>
            <input
              type="radio"
              name="contactMethod"
              value={method}
              checked={contactMethod === method}
              onChange={(e) => setContactMethod(e.target.value)}
            />
            {method}
          </label>
        ))}
      </div>

      {formError && <p className="error-text">{formError}</p>}
      <button type="submit">Book now</button>
    </form>
  );
}
