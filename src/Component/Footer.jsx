import React from "react";
import { Link } from "react-router-dom";
import RoundelBadge from "./RoundelBadge";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <RoundelBadge />
          BMW
        </div>
        <p>Bangalore, Karnataka · +91 6362601745</p>
      </div>

      <div className="footer-columns">
        <div>
          <h4>Contact &amp; Info</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/enquiries">Customer Enquiries</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <h4>Showroom</h4>
          <Link to="/test-drive">Book a Test Drive</Link>
          <Link to="/insights">Showroom Insights</Link>
          <Link to="/models">Browse Models</Link>
        </div>
        <div>
          <h4>Models</h4>
          <Link to="/models/sedans">Sedans</Link>
          <Link to="/models/suvs">SUVs</Link>
          <Link to="/models/m-series">M Series</Link>
        </div>
      </div>

      <p className="footer-note">
        Student training project - not an official BMW website.
      </p>
    </footer>
  );
}
