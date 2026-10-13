import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Models() {
  return (
    <div>
      <h2>Models</h2>
      <div className="sub-header">
        <Link to={""}>All models</Link>
        <Link to={"sedans"}>Sedans</Link>
        <Link to={"suvs"}>SUVs</Link>
        <Link to={"m-series"}>M Series</Link>
      </div>
      <Outlet />
    </div>
  );
}
