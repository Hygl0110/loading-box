import "./Number.css";
import React from "react";

export default function Number(props) {
  return (
    <input
      className="number"
      type="number"
      step={"0.01"}
      {...props}
      required
    ></input>
  );
}
