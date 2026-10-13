import React from "react";
import { useSelector } from "react-redux";

export default function BookingList() {
  const booking = useSelector((state) => state.booking);

  if (booking.length === 0) {
    return <p className="empty-state">No test drive bookings yet.</p>;
  }

  return (
    <div className="booking-list">
      <h3>Your bookings</h3>
      {booking.map((item) => (
        <div className="booking-item" key={item.id}>
          <strong>{item.firstName}</strong> booked a <strong>{item.model}</strong> test
          drive at {item.branch} on {item.date} · {item.phone} · prefers{" "}
          {item.contactMethod}
        </div>
      ))}
    </div>
  );
}
