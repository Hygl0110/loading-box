import "./Forms.css";
import React from "react";

import Number from "../../Atoms/Number/Number";
import Select from "../../Atoms/Select/Select";
import LoadForm from "../../Molecules/LoadForm/LoadForm";
import { Submit } from "../../Atoms/Submit/Submit";

export default function Forms(props) {
  return (
    <div>
      <form className="form" onSubmit={props.onSubmit}>
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
          <LoadForm fpClassname="fp" {...props} />
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
          <Select
            onChange={props.onChangePhases}
            options={props.phaseOptions}
          />
        </>
        <>
          <label>DT:</label>
          <Number
            onChange={props.onChangeDT}
            placeholder="Ingresar DT"
            min={0.01}
            max={400}
          />
        </>
        <>
          <Submit value={"Add Row"} />
        </>
      </form>
    </div>
  );
}
