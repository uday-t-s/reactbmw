import React from "react";
import carsData from "../carsData";
import CarCard from "../Component/CarCard";

export default function MSeries() {
  const mSeries = carsData.filter((car) => car.category === "m-series");

  return (
    <div className="car-grid">
      {mSeries.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
}
