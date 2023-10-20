//props
//loadOptions - array de opciones
import React from "react";
import Number from "../../Atoms/Number/Number";
import Select from "../../Atoms/Select/Select";

export default function LoadForm(props) {
  return (
    <div className="loadForm">
      <Number onChange={props.onChangeLoad} placeholder="Carga" min={1} />
      <Select
        onChange={props.onChangeLoadType}
        options={props.loadTypeOptions}
      />
      {props.factor ? <label> fp: </label> : null}
      {props.factor ? (
        <Number
          onChange={props.onChangeFp}
          placeholder="fp"
          min={0.01}
          max={1}
        />
      ) : null}
    </div>
  );
}
