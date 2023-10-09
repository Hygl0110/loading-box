import "./LoadsBox.css";
import React from "react";

import options from "../../Arrays/options"; //array de opciones

import Forms from "../../Organisms/Form/Forms";

export default function LoadsBox() {
  const [circuits, loads, voltages, phases, desings] = options;
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
          <Forms
            circuitOptions={circuits}
            loadOptions={loads}
            voltageOptions={voltages}
            phaseOptions={phases}
          />
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
