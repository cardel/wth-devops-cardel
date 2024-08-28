/*
 * Contact information component
 */
import React from "react";
const Contact = ({ email }) => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Nombre: Carlos Andres Delgado Saavedra</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
};

export default Contact;
