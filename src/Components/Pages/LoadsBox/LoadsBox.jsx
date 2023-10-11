import "./LoadsBox.css";
import React, { useState } from "react";

import options from "../../../Arrays/options"; //array de opciones
import { init, results } from "../../../Arrays/arrays"; //Array initial state & results array

import Forms from "../../Organisms/Form/Forms"; //Organism Froms
import Table from "../../Molecules/Table/Table";

export default function LoadsBox() {
  const [circuit, setCircuit] = useState(init); //Estado inicial que contiene un objeto con propiedades
  const [circuits, loads, voltages, phases] = options; //opciones para los Componestes Select
  let { columns, data } = results; //Para presentar los datos en la tabla de resultados

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
              circuitOptions={circuits}
              loadOptions={loads}
              voltageOptions={voltages}
              phaseOptions={phases}
            />
          </>
          <>
            <Table heads={columns} rows={data} />
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
