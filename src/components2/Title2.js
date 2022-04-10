import React from "react";
import "./title2.css";

export default function Title2({ title, subtitle }) {
  return (
    <div className="title-container">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </div>
  );
}
