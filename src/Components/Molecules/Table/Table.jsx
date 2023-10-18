import "./Table.css";
import React from "react";

export default function Table(props) {
  const th = props.heads;
  const tr = props.rows;

  return (
    <div className="table">
      <table>
        <caption>
          <h2>{props.tittle}</h2>
        </caption>
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
    </div>
  );
}
