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
  loadType: "VA",
  fp: 1,
  factor: false,
  voltage: 208,
  phases: 1,
  DT: 1,
  maxLoad: 1,
};
