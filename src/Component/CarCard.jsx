import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GarageContext } from "../App";
import { carImageUrl } from "../imageUrl";

export default function CarCard({ car }) {
  const { garage, toggleGarage } = useContext(GarageContext);
  const saved = garage.includes(car.id);

  return (
    <div className="car-card">
      <div className={`car-card-image cat-${car.category}`}>
        <img src={carImageUrl(car.photoId, 500)} alt={`BMW ${car.name}`} loading="lazy" />
        <span className="car-badge">{car.category.replace("-", " ")}</span>
        <span className="car-image-name">{car.name}</span>
      </div>
      <h3>{car.name}</h3>
      <p className="car-price">₹{car.price.toLocaleString("en-IN")}</p>
      <p className="car-meta">
        {car.year} · {car.fuel} · {car.transmission}
      </p>
      <div className="car-card-actions">
        <Link className="btn" to={`/models/${car.category}/${car.id}`}>
          View details
        </Link>
        <button className="btn btn-outline" onClick={() => toggleGarage(car.id)}>
          {saved ? "Remove from garage" : "Save to garage"}
        </button>
      </div>
    </div>
  );
}
