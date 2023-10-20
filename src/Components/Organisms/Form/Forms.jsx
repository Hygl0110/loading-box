import "./Forms.css";
import React from "react";

import Number from "../../Atoms/Number/Number";
import Select from "../../Atoms/Select/Select";
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
          <Number onChange={props.onChangeLoad} placeholder="Carga" min={1} />
          <Select
            onChange={props.onChangeLoadType}
            options={props.loadTypeOptions}
          />
          {props.factor ? <label> fp: </label> : null}
          {props.factor ? (
            <Number
              onChange={props.onChangeFp}
              placeholder="fp"
              min={0.01}
              max={1}
            />
          ) : null}
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
          />
        </>
        <>
          <Submit value={"Add Row"} />
        </>
      </form>
    </div>
  );
}
