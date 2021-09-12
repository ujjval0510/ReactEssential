import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="event">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>Event page</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About page</h1>
      <Outlet />
      <nav>
        <Link to="service">Services</Link>
        <Link to="companyhistory">CompanyHistory</Link>
        <Link to="companylocation">CompanyLocation</Link>
      </nav>
    </div>
  );
}

// Nested component
export function Services() {
  return (
    <div>
      <h2>Our Services</h2>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div>
      <h2>Our Company History</h2>
    </div>
  );
}

export function CompanyLocation() {
  return (
    <div>
      <h2>Our Company Location</h2>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact page</h1>
    </div>
  );
}

//When not routes match
export function Whoop404() {
  const location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}