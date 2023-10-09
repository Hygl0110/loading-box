import React, { useState } from "react";

export default function Select(props) {
  const item = props.item;
  const [option, setOption] = useState(item[0]);

  const handleOptionChange = (e) => {
    const newOption = e.target.value;
    setOption(newOption);
    props.onSelectChange(newOption);
  };

  return (
    <select value={option} onChange={handleOptionChange}>
      {item.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
}
