//props
//loadOptions - array de opciones
import React from "react";
import Number from "../../Atoms/Number/Number";
import Select from "../../Atoms/Select/Select";

export default function LoadForm(props) {
  return (
    <div className="loadForm">
      <Number value={props.valueLoad} onChange={props.onChangeLoad} />
      <Select options={props.loadOptions} />
      {props.fp ? (
        <Number value={props.valueFp} onChange={props.onChangeFp} />
      ) : null}
    </div>
  );
}
