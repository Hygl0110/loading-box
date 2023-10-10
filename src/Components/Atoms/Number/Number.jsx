import React from "react";

export default function Number(props) {
  return (
    <input
      type="number"
      step={"0.01"}
      max={props.max}
      min={props.min}
      required
    ></input>
  );
}
