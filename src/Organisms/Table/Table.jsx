import React from "react";

export default function Table(props) {
  const th = ["Carga", "", "VA", "Voltage (V)", "Current (A)", "DT"];
  const td = [
    props.load,
    props.loadType,
    props.VA,
    props.coltage,
    props.current,
    props.DT,
  ];
  return (
    <table>
      <thead>
        <tr>
          {th.map((th, index) => (
            <th key={index}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {td.map((td, index) => (
            <th key={index}>{td}</th>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
