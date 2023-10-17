import "./Forms.css";
import React from "react";

import Number from "../../Atoms/Number/Number";
import Select from "../../Atoms/Select/Select";
import LoadForm from "../../Molecules/LoadForm/LoadForm";

export default function Forms(props) {
  return (
    <form className="forms" onSubmit={props.onSubmit}>
      <>
        <h3>Form:</h3>
      </>
      <>
        <label>Circuit:</label>
        <Select
          onChange={props.onChangeCircuit}
          options={props.circuitOptions}
        />
      </>
      <>
        <label>Load:</label>
        <LoadForm {...props} />
      </>
      <>
        <label>Voltage:</label>
        <Select
          onChange={props.onChangeVoltage}
          options={props.voltageOptions}
        />
      </>
      <>
        <label>phases:</label>
        <Select onChange={props.onChangePhases} options={props.phaseOptions} />
      </>
      <>
        <label>DT:</label>
        <Number
          onChange={props.onChangeDT}
          placeholder="Ingresar DT"
          min={0.01}
          max={300}
        />
      </>
      <>
        <button type="submit">Submit</button>
      </>
    </form>
  );
}
