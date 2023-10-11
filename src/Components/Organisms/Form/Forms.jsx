import "./Forms.css";
import React from "react";

import Number from "../../Atoms/Number/Number";
import Select from "../../Atoms/Select/Select";
import LoadForm from "../../Molecules/LoadForm/LoadForm";

export default function Forms(props) {
  return (
    <div className="forms">
      <>
        <h3>Form:</h3>
      </>
      <>
        <label>Circuit</label>
        <Select options={props.circuitOptions} />
      </>
      <>
        <label>Load</label>
        <LoadForm {...props} />
      </>
      <>
        <label>Voltage</label>
        <Select options={props.voltageOptions} />
      </>
      <>
        <label>phases</label>
        <Select options={props.phaseOptions} />
      </>
      <>
        <label>DT</label>
        <Number onChange={props.onChangeDT} />
      </>
    </div>
  );
}
