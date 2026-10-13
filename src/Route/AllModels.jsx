import React from "react";
import { useSearchParams } from "react-router-dom";
import carsData from "../carsData";
import CarCard from "../Component/CarCard";

export default function AllModels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const price = searchParams.get("price") || "all";

  const filteredCars = carsData.filter((car) => {
    if (price === "under50") return car.price < 5000000;
    if (price === "50to100") return car.price >= 5000000 && car.price <= 10000000;
    if (price === "above100") return car.price > 10000000;
    return true;
  });

  return (
    <div>
      <div className="filter-bar">
        <button onClick={() => setSearchParams({ price: "all" })}>All</button>
        <button onClick={() => setSearchParams({ price: "under50" })}>
          Under ₹50L
        </button>
        <button onClick={() => setSearchParams({ price: "50to100" })}>
          ₹50L - ₹1Cr
        </button>
        <button onClick={() => setSearchParams({ price: "above100" })}>
          Above ₹1Cr
        </button>
      </div>

      <div className="car-grid">
        {filteredCars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
}
