import "./Forms.css";
import React from "react";

import Number from "../../Atoms/Number/Number";
import Select from "../../Atoms/Select/Select";
import { Submit } from "../../Atoms/Submit/Submit";

export default function Forms(props) {
  return (
    <div className="form_container">
      <form className="form" onSubmit={props.onSubmit}>
        <>
          <h3>Form:</h3>
        </>

        <>
          <label>Circuit:</label>
          <Select
            id="circuit"
            name="circuit"
            title="CIRCUIT"
            onChange={props.onChangeCircuit}
            options={props.circuitOptions}
          />
        </>

        <>
          <label>Load:</label>
          <Number
            id="load"
            name="load"
            title="LOAD"
            onChange={props.onChangeLoad}
            placeholder="Load"
            min={0.01}
          />
        </>

        <>
          <label>Load units:</label>
          <Select
            id="loadUnits"
            name="loadUnits"
            title="LOAD UNITS"
            onChange={props.onChangeLoadUnits}
            options={props.loadTypeOptions}
          />
        </>
        <>
          {props.powerFactor ? (
            <>
              <label> Power factor: </label>
              <Number
                id="powerFactor"
                name="powerFactor"
                title="POWER FACTOR"
                onChange={props.onChangePowerFactor}
                placeholder="Power factor"
                min={0.01}
                max={1}
              />
            </>
          ) : null}
        </>

        <>
          <label>Phases number:</label>
          <Select
            id="phases"
            name="phases"
            title="PHASES NUMBER"
            onChange={props.onChangePhasesNumber}
            options={props.phaseOptions}
          />
        </>

        <>
          <label>Voltage:</label>
          {props.phaseVoltage ? (
            <Select
              id="voltage"
              name="voltage"
              title="PHASE VOLTAGE"
              onChange={props.onChangeVoltage}
              options={props.phaseVoltageOptions}
            />
          ) : (
            <Select
              id="voltage"
              name="voltage"
              title="LINE VOLTAGE"
              onChange={props.onChangeVoltage}
              options={props.lineVoltageOptions}
            />
          )}
        </>

        <>
          <label>Board distance:</label>
          <Number
            id="DT"
            name="DT"
            title="DISTANCE"
            onChange={props.onChangeBoardDistance}
            placeholder="Board distance"
            min={0.01}
          />
        </>

        <>
          <Submit title="Agregar" value={"Add Row"} />
        </>
      </form>
    </div>
  );
}
