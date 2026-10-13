import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../Component/Reviews";
import { carImageUrl } from "../imageUrl";

const heroPhotoId = "1704226840161-5718a7894bf0";

const featuredModels = [
  {
    category: "suvs",
    id: 6,
    name: "X5",
    tagline: "The new X5.",
    note: "Full-size luxury SUV.",
    price: "₹98,00,000",
    photoId: "1731988666894-482242ceae2f",
  },
  {
    category: "sedans",
    id: 3,
    name: "7 Series",
    tagline: "The flagship 7.",
    note: "Our most luxurious sedan.",
    price: "₹1,59,50,000",
    photoId: "1610809376778-928ee2c3a561",
  },
  {
    category: "m-series",
    id: 10,
    name: "M5",
    tagline: "The M5.",
    note: "Built by BMW M.",
    price: "₹1,95,00,000",
    photoId: "1628387784028-f30a72c47f42",
  },
];

export default function Home() {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${carImageUrl(heroPhotoId, 1600)})` }}>
        <p className="eyebrow">The showroom</p>
        <h1>BMW</h1>
        <p>
          Explore the full BMW lineup - sedans, SUVs, and the M Series - and book a
          test drive at our showroom.
        </p>
        <Link className="btn btn-light" to="/models">
          Browse models
        </Link>
      </div>

      <div className="quick-actions">
        <div className="quick-action-card">
          <svg className="quick-action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p className="quick-actions-title">Find a new car.</p>
          <Link className="btn btn-outline" to="/models">
            Search now
          </Link>
        </div>
        <div className="quick-action-card">
          <svg className="quick-action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="10" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M5 10l1.8-4.5A2 2 0 0 1 8.65 4h6.7a2 2 0 0 1 1.85 1.5L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="7.5" cy="18" r="1.4" fill="currentColor" />
            <circle cx="16.5" cy="18" r="1.4" fill="currentColor" />
          </svg>
          <p className="quick-actions-title">Book a test drive.</p>
          <Link className="btn btn-outline" to="/test-drive">
            Request a test drive
          </Link>
        </div>
        <div className="quick-action-card">
          <svg className="quick-action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 5h16v11H8l-4 4V5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <p className="quick-actions-title">Have a question?</p>
          <Link className="btn btn-outline" to="/contact">
            Get in touch
          </Link>
        </div>
      </div>

      {featuredModels.map((car) => (
        <div
          className={`feature-promo cat-${car.category}`}
          style={{ backgroundImage: `url(${carImageUrl(car.photoId, 1400)})` }}
          key={car.id}
        >
          <div className="feature-promo-text">
            <p className="eyebrow">{car.tagline}</p>
            <h2>BMW {car.name}</h2>
            <p>{car.note}</p>
            <p className="feature-promo-price">Price starting at {car.price}*</p>
            <Link className="btn btn-light" to={`/models/${car.category}/${car.id}`}>
              Know more
            </Link>
          </div>
        </div>
      ))}

      <div className="home-stats">
        <div>
          <h2>10+</h2>
          <p>models in stock</p>
        </div>
        <div>
          <h2>15</h2>
          <p>years of service</p>
        </div>
        <div>
          <h2>500+</h2>
          <p>happy customers</p>
        </div>
      </div>

      <Reviews />
    </div>
  );
}
