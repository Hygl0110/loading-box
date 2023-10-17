import "./LoadsBox.css";
import React, { useContext, useState } from "react";

import options from "../../../Arrays/options"; //array de opciones
import { columns, formInit, init } from "../../../Arrays/arrays"; //Array initial state & results array

import Forms from "../../Organisms/Form/Forms"; //Organism Froms
import Table from "../../Molecules/Table/Table"; //Organism Table

import { calcRowTable } from "../../../Logic/Calcular"; //Logica

export default function LoadsBox() {
  const [circuits, loadTypes, voltages, phases] = options; //opciones para los Componestes Select

  const [circuit, setCircuit] = useState(init); //Estado inicial que contiene un objeto con propiedades

  const [form, setForm] = useState(formInit); //Estado para el formulario

  console.log(form);
  //Eventos - Formulario

  //onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  //Circuito
  const handleCircuitChange = (e) => {
    const newCircuit = e.target.value;
    let updatedForm = { ...form, circuit: newCircuit };
    setForm(updatedForm);
  };

  //Carga
  const handleLoadChange = (e) => {
    let newLoad = e.target.value;
    if (newLoad <= 0) {
      newLoad = 1;
    }
    let updatedForm = { ...form, load: newLoad };
    setForm(updatedForm);
  };

  //Tipo de carga
  const handleLoadTypeChange = (e) => {
    const newLoadType = e.target.value;
    let updatedForm = { ...form, loadType: newLoadType };
    //Esta en 'VA' ?, si no, ingresar factor de potencia
    if (newLoadType !== "VA") {
      updatedForm = { ...updatedForm, factor: true };
    } else {
      updatedForm = { ...updatedForm, factor: false, fp: 1 };
    }
    setForm(updatedForm);
  };

  //Factor de potencia
  const handleFpChange = (e) => {
    let newFp = e.target.value;
    if (newFp <= 0 || newFp > 1) {
      newFp = 1;
    }
    let updatedForm = { ...form, fp: newFp };
    setForm(updatedForm);
  };

  //Voltage
  const handleVoltageChange = (e) => {
    const newVoltage = parseInt(e.target.value);
    let updatedForm = { ...form, voltage: newVoltage };
    setForm(updatedForm);
  };

  //Phases
  const handlePhasesChange = (e) => {
    const newPhase = parseInt(e.target.value);
    let updatedForm = { ...form, phases: newPhase };
    setForm(updatedForm);
  };

  //DT
  const handleDTChange = (e) => {
    let newDT = e.target.value;
    if (newDT === 0) {
      newDT = 1;
    }
    let updatedForm = { ...form, DT: newDT };
    setForm(updatedForm);
  };

  console.log(
    calcRowTable(
      form.circuit,
      form.load,
      form.loadType,
      form.fp,
      form.phases,
      form.voltage,
      form.DT
    )
  );

  return (
    <div className="loadsBox">
      <>
        <header className="header">
          <label>header: </label>
          <h1>Loading Box</h1>
        </header>
      </>
      <>
        <main className="main">
          <p>main:</p>
          <>
            <Forms
              /*Submit*/
              onSubmit={handleSubmit}
              /* Events */
              onChangeCircuit={handleCircuitChange}
              onChangeLoad={handleLoadChange}
              onChangeLoadType={handleLoadTypeChange}
              onChangeFp={handleFpChange}
              onChangeVoltage={handleVoltageChange}
              onChangePhases={handlePhasesChange}
              onChangeDT={handleDTChange}
              /* Options */
              circuitOptions={circuits}
              loadTypeOptions={loadTypes}
              voltageOptions={voltages}
              phaseOptions={phases}
              /* factor */
              factor={form.factor}
            />
          </>
          <>
            <Table heads={columns} rows={circuit.results} />
          </>
        </main>
      </>
      <>
        <footer className="footer">
          <label>footer: </label>
          <p>by: Daniel Cardona</p>
        </footer>
      </>
    </div>
  );
}
