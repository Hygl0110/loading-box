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
            title="Circuito"
            onChange={props.onChangeCircuit}
            options={props.circuitOptions}
          />
        </>

        <>
          <label>Load:</label>
          <Number
            title="Carga"
            onChange={props.onChangeLoad}
            placeholder="Carga"
            min={1}
          />
        </>

        <>
          <label>Load units:</label>
          <Select
            title="Tipo de arga"
            onChange={props.onChangeLoadType}
            options={props.loadTypeOptions}
          />
          {props.factor ? <label> lf: </label> : null}
          {props.factor ? (
            <Number
              title="Factor de potencia"
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
            title="Voltaje"
            onChange={props.onChangeVoltage}
            options={props.voltageOptions}
          />
        </>

        <>
          <label>Phases:</label>
          <Select
            title="Numero de fases"
            onChange={props.onChangePhases}
            options={props.phaseOptions}
          />
        </>

        <>
          <label>DT:</label>
          <Number
            title="Distancia al tablero"
            onChange={props.onChangeDT}
            placeholder="Ingresar DT"
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
