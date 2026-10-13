import React, { createContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Route/Home";
import About from "./Route/About";
import Models from "./Route/Models";
import AllModels from "./Route/AllModels";
import Sedans from "./Route/Sedans";
import SUVs from "./Route/SUVs";
import MSeries from "./Route/MSeries";
import ModelDetail from "./Route/ModelDetail";
import Insights from "./Route/Insights";
import Garage from "./Route/Garage";
import Buy from "./Route/Buy";
import OrderConfirmed from "./Route/OrderConfirmed";
import TestDrive from "./Route/TestDrive";
import Enquiries from "./Route/Enquiries";
import Contact from "./Route/Contact";
import NotFound from "./Route/NotFound";
import Footer from "./Component/Footer";
import RoundelBadge from "./Component/RoundelBadge";
import "./App.css";

export const GarageContext = createContext();
export const ThemeContext = createContext();

export default function App() {
  const [garage, setGarage] = useState([]);
  const [theme, setTheme] = useState("light");

  const toggleGarage = (id) => {
    setGarage((garage) => {
      if (garage.includes(id)) {
        return garage.filter((carId) => carId !== id);
      }
      return [...garage, id];
    });
  };

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <GarageContext.Provider value={{ garage, toggleGarage }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="app-theme-root" data-theme={theme}>
          <BrowserRouter>
            <div className="header">
              <Link className="brand" to={"/"}>
                <RoundelBadge />
                BMW
              </Link>
              <div className="nav-links">
                <Link to={"/"}>Home</Link>
                <Link to={"/models"}>Models</Link>
                <Link to={"/insights"}>Insights</Link>
                <Link to={"/test-drive"}>Test Drive</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/about"}>About</Link>
              </div>
              <div className="header-actions">
                <button
                  className="theme-toggle"
                  onClick={toggleTheme}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M20 14.5a8.5 8.5 0 1 1-9.5-9.4 7 7 0 0 0 9.5 9.4z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                <Link className="garage-count" to={"/garage"}>
                  Garage ({garage.length})
                </Link>
              </div>
            </div>

            <div className="page">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/models" element={<Models />}>
                  <Route path="" element={<AllModels />} />
                  <Route path="sedans" element={<Sedans />} />
                  <Route path="suvs" element={<SUVs />} />
                  <Route path="m-series" element={<MSeries />} />
                  <Route path=":category/:id" element={<ModelDetail />} />
                </Route>
                <Route path="/insights" element={<Insights />} />
                <Route path="/garage" element={<Garage />} />
                <Route path="/buy/:category/:id" element={<Buy />} />
                <Route path="/order-confirmed/:category/:id" element={<OrderConfirmed />} />
                <Route path="/test-drive" element={<TestDrive />} />
                <Route path="/enquiries" element={<Enquiries />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </GarageContext.Provider>
  );
}
