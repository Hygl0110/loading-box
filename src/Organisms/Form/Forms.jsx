import Select from "../../Atoms/Select/Select";
import LoadForm from "../../Molecules/LoadForm/LoadForm";
import "./Forms.css";
import React from "react";
export default function Forms(props) {
  return (
    <form className="forms">
      <>
        <label>input: Circuit</label>
        <Select options={props.circuitOptions} />
      </>
      <>
        <label>input: Load</label>
        <LoadForm {...props} />
      </>
      <>
        <label>input: Voltage</label>
        <Select options={props.voltageOptions} />
      </>
      <>
        <label>input: phases</label>
        <Select options={props.phaseOptions} />
      </>
    </form>
  );
}
