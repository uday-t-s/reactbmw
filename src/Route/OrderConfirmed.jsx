import React from "react";
import { Link, useParams } from "react-router-dom";
import carsData from "../carsData";
import { carImageUrl } from "../imageUrl";

export default function OrderConfirmed() {
  const { category, id } = useParams();

  const car = carsData.find(
    (item) => item.category === category && item.id === Number(id),
  );

  if (!car) {
    return <h2>Order confirmed</h2>;
  }

  return (
    <div className="order-confirmed">
      <div className={`car-card-image large cat-${car.category}`}>
        <img src={carImageUrl(car.photoId, 1000)} alt={`BMW ${car.name}`} />
        <span className="car-badge">{car.category.replace("-", " ")}</span>
        <span className="car-image-name">{car.name}</span>
      </div>

      <p className="eyebrow">Order placed</p>
      <h2>Congratulations!</h2>
      <p>
        Your order for the BMW {car.name} has been placed successfully. Our team will
        contact you shortly to complete the purchase.
      </p>

      <div className="car-card-actions">
        <Link className="btn" to="/models">
          Browse more models
        </Link>
        <Link className="btn btn-outline" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
