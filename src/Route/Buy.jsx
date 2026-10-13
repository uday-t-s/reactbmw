import React from "react";
import { useParams } from "react-router-dom";
import carsData from "../carsData";
import { carImageUrl } from "../imageUrl";
import PurchaseForm from "../Component/PurchaseForm";

export default function Buy() {
  const { category, id } = useParams();

  const car = carsData.find(
    (item) => item.category === category && item.id === Number(id),
  );

  if (!car) {
    return <h2>Model not found</h2>;
  }

  return (
    <div className="model-detail">
      <div className="model-detail-media">
        <div className={`car-card-image large cat-${car.category}`}>
          <img src={carImageUrl(car.photoId, 1000)} alt={`BMW ${car.name}`} />
          <span className="car-badge">{car.category.replace("-", " ")}</span>
          <span className="car-image-name">{car.name}</span>
        </div>
        <p>{car.description}</p>
      </div>

      <div className="model-detail-info">
        <PurchaseForm car={car} />
      </div>
    </div>
  );
}
