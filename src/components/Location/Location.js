import React from "react";
import "./Location.css";

const Location = props => (
  <section className="loc-container">
    <div className="title-container">
      <h1>{`${props.location.city}, ${props.location.region}, ${props.location.country}`}</h1>

      <i className="fa fa-map-marker" aria-hidden="true" />
    </div>
  </section>
);

export default Location;
