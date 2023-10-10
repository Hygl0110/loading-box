import {
  T250_95,
  T310_16,
  T4_EMT,
  T4_PVCA,
  T5,
  T8,
  TPTM,
} from "../Arrays/NTC2050Tables";

//Calcular raiz cuadrada
function raiz(numero) {
  return Math.sqrt(numero);
}

//Ubicar datos numericos en tablas
function numTableLocate(table, valueIn, columIn, columOut) {
  let valueOut = 0;
  let index = 0;
  const { columns, data } = table;
  const indexIn = columns.indexOf(columIn);
  const indexOut = columns.indexOf(columOut);
  for (const element of data) {
    if (element[indexIn] >= valueIn) {
      valueOut = element[indexOut];
      break;
    }
    index += 1;
  }
  return [valueOut, index];
}

//Ubicar valores con texto en tablas
function textTableLocate(table, valueIn, columIn, columOut) {
  let valueOut = "";
  let index = 0;
  const { columns, data } = table;
  const indexIn = columns.indexOf(columIn);
  const indexOut = columns.indexOf(columOut);
  for (const element of data) {
    if (element[indexIn] === valueIn) {
      valueOut = element[indexOut];
      break;
    }
    index += 1;
  }
  return [valueOut, index];
}

//Calcular la potencia y la corriente
export function calcLoad_Current(voltage, loadIn, phases, loadType) {
  const loadtypes = { VA: 1, hp: 745.699872, CV: 735.49875 };
  const load = loadIn * loadtypes.loadType;
  let current = 0;

  if (phases === 1) {
    current = (load * raiz(3)) / voltage;
  } else if (phases === 2) {
    current = load / voltage;
  } else if (phases === 3) {
    current = load / (voltage * raiz(3));
  }
  return [load, current];
}

//Calibre y Caida de tension adecuadas a la normta CT < 3%
export function AWG_CT(phases, current, voltage, DT) {
  let [calibre] = numTableLocate(T310_16, current, "Cu60", "calibre");
  let [RC, rowIndex] = textTableLocate(T8, calibre, "calibre", "Cu");
  let caida = 100;

  //#ciclo, calculo CT, aumenta un valor del indice hasta que CT < 3%
  while (caida > 3) {
    //monofasico
    if (phases === 1) {
      caida = ((2 * DT * RC * current) / (1000 * (voltage / raiz(3)))) * 100;
    } // bifasico
    else if (phases === 2) {
      caida = ((2 * DT * RC * current) / (1000 * voltage)) * 100;
    } //trifasico
    else if (phases === 3) {
      caida = ((raiz(3) * DT * RC * current) / (1000 * voltage)) * 100;
    } //Validar si la caida es menos al 3%, si es asi subimos el calibre en una unidad y se vuelve a calcula
    if (caida > 3) {
      rowIndex += 1;
      RC = T8.data[rowIndex][T8.columns.indexOf("Cu")];
      calibre = T310_16.data[rowIndex][T310_16.columns.indexOf("calibre")];
    }
  }

  return [calibre, caida.toFixed(2)];
}

//calibre del conductor a tierra
export function ground(current) {
  return numTableLocate(T250_95, current, "corriente", "Cu");
}

//seleccion de PTM
export function PTM(corriente) {
  let PTM = 15;
  const { data } = TPTM;
  for (const iterator of data) {
    if (iterator >= corriente) {
      PTM = iterator;
      break;
    }
  }
  return PTM;
}

//Diametro de acometida en PVC tipo A y EMT
export function PVCA_EMT(calibre, fhases) {
  const area = textTableLocate(T5, calibre, "calibre", "mm2") * (fhases + 2);
  return [
    numTableLocate(T4_PVCA, area, "masDe2", "ich"),
    numTableLocate(T4_EMT, area, "masDe2", "ich"),
  ];
}
