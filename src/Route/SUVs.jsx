import React from "react";
import carsData from "../carsData";
import CarCard from "../Component/CarCard";

export default function SUVs() {
  const suvs = carsData.filter((car) => car.category === "suvs");

  return (
    <div className="car-grid">
      {suvs.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
}
