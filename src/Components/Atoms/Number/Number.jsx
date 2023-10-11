import React from "react";

export default function Number(props) {
  return (
    <input
      type="number"
      step={"0.01"}
      onChange={props.onChange}
      required
    ></input>
  );
}
