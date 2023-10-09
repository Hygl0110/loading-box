//props
//loadOptions - array de opciones
import React from "react";
import Number from "../../Atoms/Number/Number";
import Select from "../../Atoms/Select/Select";

export default function LoadForm(props) {
  return (
    <form className="loadForm">
      <Number />
      <Select options={props.loadOptions} />
    </form>
  );
}
