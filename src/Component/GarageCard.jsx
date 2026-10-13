import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GarageContext } from "../App";
import { carImageUrl } from "../imageUrl";

export default function GarageCard({ car }) {
  const { toggleGarage } = useContext(GarageContext);

  return (
    <div className="garage-card">
      <div className="garage-card-image">
        <img src={carImageUrl(car.photoId, 400)} alt={`BMW ${car.name}`} loading="lazy" />
        <button
          className="garage-card-heart"
          onClick={() => toggleGarage(car.id)}
          aria-label="Remove from garage"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 21s-7-4.35-9.5-8.28C1.2 10.1 1.8 6.8 4.6 5.3a5 5 0 0 1 6.4 1.2 5 5 0 0 1 6.4-1.2c2.8 1.5 3.4 4.8 2.1 7.42C19 16.65 12 21 12 21z" />
          </svg>
        </button>
      </div>
      <Link to={`/models/${car.category}/${car.id}`}>
        <h4>BMW {car.name}</h4>
      </Link>
      <p className="hint-text">
        {car.year} · {car.fuel}
      </p>
      <p className="car-price">₹{car.price.toLocaleString("en-IN")}</p>
      <Link className="btn" to={`/buy/${car.category}/${car.id}`}>
        Buy now
      </Link>
    </div>
  );
}
