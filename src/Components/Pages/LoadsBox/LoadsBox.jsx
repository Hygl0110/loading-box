import "./LoadsBox.css";
import React, { useState } from "react";

import options from "../../../Arrays/options"; //array de opciones
import { columns, formInit, init } from "../../../Arrays/arrays"; //Array initial state & results array

import Forms from "../../Organisms/Form/Forms"; //Organism Froms
import Table from "../../Molecules/Table/Table"; //Organism Table

import { calcRowTable } from "../../../Logic/Calcular"; //Logica

export default function LoadsBox() {
  const [circuits, loadTypes, voltages, phases] = options; //opciones para los Componestes Select

  const [circuit, setCircuit] = useState(init); //Estado inicial para los resultado de la tabla

  const [form, setForm] = useState(formInit); //Estado para el formulario

  console.log(form);
  //onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("submit");
      const newRow = calcRowTable(
        form.circuit,
        form.load,
        form.loadType,
        form.fp,
        form.phases,
        form.voltage,
        form.DT
      );
      let updatedResults = [...circuit.results, newRow];
      let updatedCircuit = { ...circuit, results: updatedResults };
      setCircuit(updatedCircuit);
    } catch (error) {
      alert(
        "La corriente del circuito ingresado supera los 560A, no se encuntran datos en la tabla 310-16 para 60°"
      );
    }
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
    if (newLoad <= 0 || newLoad > 100000) {
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
    if (newDT < 0 || newDT > 400) {
      newDT = 1;
    }
    let updatedForm = { ...form, DT: newDT };
    setForm(updatedForm);
  };

  return (
    <div className="loadsBox">
      <>
        <header className="header">
          <h2>Loading Box</h2>
        </header>
      </>
      <>
        <main className="main">
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
            <Table
              heads={columns}
              rows={circuit.results}
              tittle="Cuadro de cargas"
            />
          </>
        </main>
      </>
      <>
        <footer className="footer">
          <p>
            Conductores Fase y Neutro: T316-16 NTC 2050 - diseño a 60° para
            conductores canalizados
          </p>
          <p>Condutor Tierra : T250-95 NTC 2050 - conductor puesta a tierra</p>
          <p>conduit PVC tipo A y conduit EMT: T4 NTC 2050 </p>
          <br />
          <p>
            <a
              href="https://www.minenergia.gov.co/documents/3809/Anexo_General_del_RETIE_vigente_actualizado_a_2015-1.pdf"
              target="_blanck"
            >
              Anexo General del RETIE 2013
            </a>
          </p>
          <br />
          <p>by: Daniel Cardona</p>
        </footer>
      </>
    </div>
  );
}
