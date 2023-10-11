import "./Table.css";
import React from "react";

export default function Table(props) {
  const th = props.heads;
  const tr = props.rows;

  return (
    <table className="table">
      <thead>
        <tr>
          {th.map((th, index) => (
            <th key={index}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tr.map((tr, rIndex) => (
          <tr key={rIndex}>
            {tr.map((td, dIndex) => (
              <th key={dIndex}>{td}</th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
