import React, { useState } from "react";

export default function Number(props) {
  const [number, setNumber] = useState(0);

  const handleNumberChange = (e) => {
    const newNumber = e.target.value;
    setNumber(newNumber);
    props.onNumberChange(newNumber);
  };
  return (
    <>
      <input
        type="number"
        value={number}
        placeholder={props.placeholder}
        onChange={handleNumberChange}
      ></input>
    </>
  );
}
