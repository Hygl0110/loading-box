import React from "react";

export default function Select(props) {
  const options = props.options;
  return (
    <select>
      {options.options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
}
