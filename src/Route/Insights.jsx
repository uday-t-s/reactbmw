import React, { useState } from "react";
import { Link } from "react-router-dom";
import carsData from "../carsData";
import { carImageUrl } from "../imageUrl";

function formatInr(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function Insights() {
  const [selectedIds, setSelectedIds] = useState(
    carsData.slice(0, 3).map((car) => car.id),
  );

  const toggleSelected = (id) => {
    setSelectedIds((selectedIds) => {
      if (selectedIds.includes(id)) {
        return selectedIds.filter((carId) => carId !== id);
      }
      return [...selectedIds, id];
    });
  };

  const comparedCars = carsData.filter((car) => selectedIds.includes(car.id));

  const sortedByQty = [...carsData].sort((a, b) => b.qtySold - a.qtySold);
  const topModel = sortedByQty[0];

  return (
    <div>
      <h2>Showroom insights</h2>

      <div className="insights-spotlight">
        <div className={`car-card-image large cat-${topModel.category}`}>
          <img src={carImageUrl(topModel.photoId, 800)} alt={`BMW ${topModel.name}`} />
          <span className="car-badge">Top seller</span>
          <span className="car-image-name">{topModel.name}</span>
        </div>
        <div className="insights-spotlight-info">
          <h3>BMW {topModel.name}</h3>
          <p className="hint-text">Best selling model this year</p>
          <Link className="btn" to={`/models/${topModel.category}/${topModel.id}`}>
            View {topModel.name}
          </Link>
        </div>
      </div>

      <h3 className="insights-section-title">Top selling models</h3>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <td>Model</td>
              <td>Year</td>
              <td>Qty sold</td>
              <td>Revenue</td>
            </tr>
          </thead>
          <tbody>
            {sortedByQty.map((car) => (
              <tr key={car.id}>
                <td data-label="Model">{car.name}</td>
                <td data-label="Year">{car.year}</td>
                <td data-label="Qty sold">{car.qtySold}</td>
                <td data-label="Revenue">{formatInr(car.price * car.qtySold)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="insights-section-title">All models</h3>
      <div className="model-gallery">
        {carsData.map((car) => (
          <Link
            className="model-gallery-item"
            to={`/models/${car.category}/${car.id}`}
            key={car.id}
          >
            <div className={`car-card-image cat-${car.category}`}>
              <img src={carImageUrl(car.photoId, 200)} alt={`BMW ${car.name}`} loading="lazy" />
            </div>
            <p className="model-gallery-name">{car.name}</p>
            <p className="model-gallery-qty">{car.qtySold} sold</p>
          </Link>
        ))}
      </div>

      <h3 className="insights-section-title">Compare models</h3>
      <p className="hint-text">Pick the models you want to compare.</p>
      <div className="compare-picker">
        {carsData.map((car) => (
          <label className="compare-picker-option" key={car.id}>
            <input
              type="checkbox"
              checked={selectedIds.includes(car.id)}
              onChange={() => toggleSelected(car.id)}
            />
            {car.name}
          </label>
        ))}
      </div>

      {comparedCars.length === 0 ? (
        <p className="empty-state">Select at least one model above to compare.</p>
      ) : (
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <td>Model</td>
                <td>Price</td>
                <td>Power</td>
                <td>Top speed</td>
                <td>0-100 km/h</td>
                <td>Mileage</td>
                <td>Seating</td>
              </tr>
            </thead>
            <tbody>
              {comparedCars.map((car) => (
                <tr key={car.id}>
                  <td data-label="Model">{car.name}</td>
                  <td data-label="Price">{formatInr(car.price)}</td>
                  <td data-label="Power">{car.power}</td>
                  <td data-label="Top speed">{car.topSpeed}</td>
                  <td data-label="0-100 km/h">{car.acceleration}</td>
                  <td data-label="Mileage">{car.mileage}</td>
                  <td data-label="Seating">{car.seating} seats</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
