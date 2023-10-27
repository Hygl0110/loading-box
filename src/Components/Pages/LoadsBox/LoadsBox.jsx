import "./LoadsBox.css";
import React, { useEffect, useState } from "react";

import Header from "../../Organisms/Header/Header"; //Organism Header
import Footer from "../../Organisms/Footer/Footer"; //Organism Footer

import options from "../../../Arrays/options"; //array de opciones
import { columns, formInit, init } from "../../../Arrays/arrays"; //Array initial state & results array

import Forms from "../../Organisms/Form/Forms"; //Organism Froms
import Table from "../../Molecules/Table/Table"; //Organism Table

import { calcRowTable } from "../../../Logic/Calcular"; //Logica

export default function LoadsBox() {
  const [circuits, loadTypes, phaseVoltages, lineVoltages, phases] = options; //opciones para los Componestes Select

  const [circuit, setCircuit] = useState(init); //Estado inicial para los resultado de la tabla

  const [form, setForm] = useState(formInit); //Estado para el formulario

  useEffect(() => {
    console.log(form);
  }, [form]);

  //onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("submit");
      const newRow = calcRowTable(
        form.circuit,
        form.load,
        form.loadUnits,
        form.powerFactor,
        form.phases,
        form.voltage,
        form.boardDistance
      );
      const updatedResults = [...circuit.results, newRow];
      const updatedCircuit = { ...circuit, results: updatedResults };
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
    const updatedForm = { ...form, circuit: newCircuit };
    setForm(updatedForm);
  };

  //Carga
  const handleLoadChange = (e) => {
    const newLoad = parseFloat(e.target.value);
    const updatedForm = { ...form, load: newLoad };
    setForm(updatedForm);
  };

  //LOAD UNITS
  const handleLoadUnitsChange = (e) => {
    const newLoadUnit = e.target.value;
    const updatedForm =
      newLoadUnit === "VA"
        ? { ...form, loadUnits: newLoadUnit, powerFactor: 1 }
        : { ...form, loadUnits: newLoadUnit };
    setForm(updatedForm);
  };

  //POWER FACTOR
  const handlePowerFactorChange = (e) => {
    const newPowerFactor = parseFloat(e.target.value);
    const updatedForm = { ...form, powerFactor: newPowerFactor };
    setForm(updatedForm);
  };

  //PHASES NUMBER
  const handlePhasesNumberChange = (e) => {
    const newPhase = parseFloat(e.target.value);
    const updatedForm = { ...form, phases: newPhase };
    setForm(updatedForm);
  };

  //VOLTAGE
  const handleVoltageChange = (e) => {
    const newVoltage = parseFloat(e.target.value);
    const updatedForm = { ...form, voltage: newVoltage };
    setForm(updatedForm);
  };

  //BOARD DISTNACE
  const handleBoardDistanceChange = (e) => {
    const newBoardDistance = parseFloat(e.target.value);
    let updatedForm = { ...form, boardDistance: newBoardDistance };
    setForm(updatedForm);
  };

  return (
    <div className="loadsBox">
      <>
        <Header />
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
              onChangeLoadUnits={handleLoadUnitsChange}
              onChangePowerFactor={handlePowerFactorChange}
              onChangePhasesNumber={handlePhasesNumberChange}
              onChangeVoltage={handleVoltageChange}
              onChangeBoardDistance={handleBoardDistanceChange}
              /* Options */
              circuitOptions={circuits}
              loadTypeOptions={loadTypes}
              phaseOptions={phases}
              phaseVoltageOptions={phaseVoltages}
              lineVoltageOptions={lineVoltages}
              /*Customized ciruit ? */
              customCircuit={form.circuit === "Customized" ? true : false}
              /* factor ? */
              powerFactor={form.loadUnits === "VA" ? false : true}
              /* phase Voltage ? */
              phaseVoltage={form.phases === 1 ? true : false}
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
      <Footer />
    </div>
  );
}
