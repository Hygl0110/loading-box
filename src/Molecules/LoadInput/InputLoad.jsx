import React, { useState } from "react";
import Number from "../../Atoms/Number/Number";
import Select from "../../Atoms/Select/Select";

export default function InputLoad(props) {
  const loadOptions = ["VA", "hp", "cv"];

  const [load, setLoad] = useState(0);
  const [loads, setLoads] = useState(loadOptions[0]);
  const [LF, setLF] = useState(1);
  const [VA, setVA] = useState(0);

  //sincornizar estado con hijo Number
  const handleLoadChange = (newNumber) => {
    setLoad(newNumber);
  };
  //sincornizar estado con hijo Select
  const handleLoadsChange = (newOption) => {
    setLoads(newOption);
  };
  //sincornizar con hijo LF
  const handleLFChange = (newNumber) => {
    setLF(newNumber);
  };

  return (
    <>
      <label>Input Load: </label>
      <Number onNumberChange={handleLoadChange} />
      <Select onSelectChange={handleLoadsChange} item={loadOptions} />
      {loads === loadOptions[1] || loads === loadOptions[2] ? (
        <>
          <label>LF :</label> <Number onNumberChange={handleLFChange} />
        </>
      ) : null}
      <p>load: {load}</p>
      <p>loads: {loads}</p>
      <p>LF: {LF}</p>
      <p>LF: {VA}</p>
    </>
  );
}
