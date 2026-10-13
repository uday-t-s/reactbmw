import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import carsData from "../carsData";
import { GarageContext } from "../App";
import { carImageUrl } from "../imageUrl";
import CarCard from "../Component/CarCard";

export default function ModelDetail() {
  const { category, id } = useParams();
  const { garage, toggleGarage } = useContext(GarageContext);

  const car = carsData.find(
    (item) => item.category === category && item.id === Number(id),
  );

  if (!car) {
    return <h2>Model not found</h2>;
  }

  const saved = garage.includes(car.id);
  const similarCars = carsData
    .filter((item) => item.category === car.category && item.id !== car.id)
    .slice(0, 3);

  return (
    <div>
      <div className="model-detail">
        <div className="model-detail-media">
          <div className={`car-card-image large cat-${car.category}`}>
            <img src={carImageUrl(car.photoId, 1000)} alt={`BMW ${car.name}`} />
            <span className="car-badge">{car.category.replace("-", " ")}</span>
            <span className="car-image-name">{car.name}</span>
          </div>
          <h2>BMW {car.name}</h2>
          <p className="car-price">₹{car.price.toLocaleString("en-IN")}</p>
          <p>{car.description}</p>
        </div>

        <div className="model-detail-info">
          <div className="spec-grid">
            <div>
              <p className="spec-label">Engine</p>
              <p className="spec-value">{car.engine}</p>
            </div>
            <div>
              <p className="spec-label">Power</p>
              <p className="spec-value">{car.power}</p>
            </div>
            <div>
              <p className="spec-label">Top speed</p>
              <p className="spec-value">{car.topSpeed}</p>
            </div>
            <div>
              <p className="spec-label">0-100 km/h</p>
              <p className="spec-value">{car.acceleration}</p>
            </div>
            <div>
              <p className="spec-label">Mileage</p>
              <p className="spec-value">{car.mileage}</p>
            </div>
            <div>
              <p className="spec-label">Fuel</p>
              <p className="spec-value">{car.fuel}</p>
            </div>
            <div>
              <p className="spec-label">Transmission</p>
              <p className="spec-value">{car.transmission}</p>
            </div>
            <div>
              <p className="spec-label">Seating</p>
              <p className="spec-value">{car.seating} seats</p>
            </div>
            <div>
              <p className="spec-label">Boot space</p>
              <p className="spec-value">{car.bootSpace}</p>
            </div>
            <div>
              <p className="spec-label">Warranty</p>
              <p className="spec-value">{car.warranty}</p>
            </div>
            <div>
              <p className="spec-label">Model year</p>
              <p className="spec-value">{car.year}</p>
            </div>
            <div>
              <p className="spec-label">Sold this year</p>
              <p className="spec-value">{car.qtySold} units</p>
            </div>
          </div>

          <div className="car-card-actions">
            <Link className="btn" to={`/buy/${car.category}/${car.id}`}>
              Buy now
            </Link>
            <Link className="btn btn-outline" to="/test-drive">
              Book a test drive
            </Link>
            <button className="btn btn-outline" onClick={() => toggleGarage(car.id)}>
              {saved ? "Remove from garage" : "Save to garage"}
            </button>
          </div>
        </div>
      </div>

      {similarCars.length > 0 && (
        <div className="similar-models">
          <h3 className="insights-section-title">You may also like</h3>
          <div className="car-grid">
            {similarCars.map((item) => (
              <CarCard car={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
