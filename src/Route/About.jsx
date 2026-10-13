import React from "react";

const features = [
  {
    title: "Wide model range",
    desc: "Sedans, SUVs, and the full M Series lineup in stock, ready for a test drive.",
  },
  {
    title: "Certified technicians",
    desc: "Factory-trained staff handle every service and repair.",
  },
  {
    title: "Flexible financing",
    desc: "Loan and EMI options tailored to your budget.",
  },
  {
    title: "Easy test drives",
    desc: "Book a test drive online in under a minute.",
  },
];

const team = [
  { name: "Rajesh Kumar", role: "Showroom Manager" },
  { name: "Ananya Pillai", role: "Sales Consultant" },
  { name: "Suresh Babu", role: "Service Head" },
  { name: "Meera Krishnan", role: "Customer Relations" },
];

export default function About() {
  return (
    <div>
      <p className="eyebrow">About us</p>
      <h2>Your trusted BMW dealership in Bangalore</h2>
      <p>
        BMW Showroom has been selling and servicing BMW cars for over 15 years. Our
        team helps you pick the right sedan, SUV, or M Series car for your needs, and
        our service center keeps it running long after you drive it home.
      </p>

      <div className="home-stats about-stats">
        <div>
          <h2>15+</h2>
          <p>years in business</p>
        </div>
        <div>
          <h2>12</h2>
          <p>certified technicians</p>
        </div>
        <div>
          <h2>6</h2>
          <p>service bays</p>
        </div>
      </div>

      <h3 className="insights-section-title">Why choose us</h3>
      <div className="about-grid">
        {features.map((f) => (
          <div className="quick-action-card" key={f.title}>
            <p className="quick-actions-title">{f.title}</p>
            <p className="hint-text">{f.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="insights-section-title">Meet the team</h3>
      <div className="about-grid">
        {team.map((person) => (
          <div className="quick-action-card" key={person.name}>
            <div className="team-avatar">
              {person.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <p className="quick-actions-title">{person.name}</p>
            <p className="hint-text">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
