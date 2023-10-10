import "./LoadsBox.css";
import React from "react";

import options from "../../../Arrays/options"; //array de opciones

import Forms from "../../Organisms/Form/Forms";
import { T310_16 } from "../../../Arrays/NTC2050Tables";
import Table from "../../Molecules/Table/Table";

export default function LoadsBox() {
  const [circuits, loads, voltages, phases] = options;
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
              minLoad={0.01}
              maxLoad={99999}
              minDT={0.01}
              maxDT={1}
            />
          </>
          <>
            <Table heads={T310_16.columns} rows={T310_16.data} />
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
