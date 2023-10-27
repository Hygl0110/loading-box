export const columns = [
  "Descripcion",
  "Carga (VA)",
  "Voltaje (V)",
  "Corriente (A)",
  "PTM (A)",
  "Polos",
  "DT (m)",
  "F",
  "N",
  "T",
  "CT (%)",
  `PVC-A (")`,
  `EMT (")`,
];
export const init = {
  //[desc, load,voltage,current,PTM,poles,DT,F,N,T,CT,PVCA,EMT]
  results: [],
};

export const formInit = {
  circuit: "Alumbrado general",
  load: 1,
  loadUnits: "VA",
  powerFactor: 1,
  phases: 1,
  voltage: 120,
  boardDistance: 1,
};
