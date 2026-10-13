import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../Slice/orderSlice";

export default function PurchaseForm({ car }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setFormError("Please fill all the fields.");
      return;
    }
    setFormError("");
    dispatch(
      addOrder({
        id: Date.now(),
        model: car.name,
        price: car.price,
        name,
        email,
        phone,
      }),
    );
    navigate(`/order-confirmed/${car.category}/${car.id}`);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Buy the BMW {car.name}</h2>
      <p className="car-price">₹{car.price.toLocaleString("en-IN")}</p>

      <label htmlFor="buyerName">Your name</label>
      <input
        id="buyerName"
        type="text"
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="buyerEmail">Email address</label>
      <input
        id="buyerEmail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="buyerPhone">Phone</label>
      <input
        id="buyerPhone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {formError && <p className="error-text">{formError}</p>}
      <button type="submit">Place order</button>
    </form>
  );
}
