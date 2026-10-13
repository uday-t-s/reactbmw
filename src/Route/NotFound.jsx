import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404 - page not found</h2>
      <Link to="/">Go back home</Link>
    </div>
  );
}
