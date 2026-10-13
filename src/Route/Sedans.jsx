import React from "react";
import carsData from "../carsData";
import CarCard from "../Component/CarCard";

export default function Sedans() {
  const sedans = carsData.filter((car) => car.category === "sedans");

  return (
    <div className="car-grid">
      {sedans.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
}
