import "./Submit.css";
import React from "react";

export const Submit = (props) => {
  return (
    <button className="submit" type="submit">
      {props.value}
    </button>
  );
};
