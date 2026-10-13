import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carsData from "../carsData";
import { GarageContext } from "../App";
import GarageCard from "../Component/GarageCard";

export default function Garage() {
  const { garage } = useContext(GarageContext);
  const savedCars = carsData.filter((car) => garage.includes(car.id));

  return (
    <div>
      <h2>My garage</h2>
      <p className="hint-text">Cars you have saved for later.</p>

      {savedCars.length === 0 ? (
        <p className="empty-state">
          You haven't saved any cars yet. <Link to="/models">Browse models</Link> and
          tap "Save to garage" to add some here.
        </p>
      ) : (
        <div className="garage-grid">
          {savedCars.map((car) => (
            <GarageCard car={car} key={car.id} />
          ))}
        </div>
      )}
    </div>
  );
}
