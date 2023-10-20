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

//calcular potencia, corriente, calibre y caida de tension adecuadas a la normta CT < 3%
export function calcRowTable(desc, loadIn, loadType, LF, phases, voltage, DT) {
  //Carga
  const loadTypes = { VA: 1, W: 1, hp: 745.699872, CV: 735.49875 };
  const load = (loadIn * loadTypes[loadType]) / LF;

  //Corriente
  let current = 0;
  //Monofasico
  if (phases === 1) {
    current = (load * raiz(3)) / voltage;
  } //Bifasico
  else if (phases === 2) {
    current = load / voltage;
  } //Trifasico
  else if (phases === 3) {
    current = load / (voltage * raiz(3));
  }

  //PTM
  let PTM = 15;
  const { data } = TPTM;
  for (const iterator of data) {
    if (iterator >= current) {
      [PTM] = iterator;
      break;
    }
  }

  //Calibre de fase y CT...
  let [calibrePhase] = numTableLocate(T310_16, current, "Cu60", "calibre");
  let [RC, rowIndex] = textTableLocate(T8, calibrePhase, "calibre", "Cu");
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
    //Aumentar el indice para caluclar CT con los sigueintes valores de la tabla
    rowIndex += 1;
    RC = T8.data[rowIndex][T8.columns.indexOf("Cu")];
    calibrePhase = T310_16.data[rowIndex][T310_16.columns.indexOf("calibre")];
  }

  //Calibre Neutro
  const calibreN = calibrePhase;

  //Calibre Tierra
  const [calibreGround] = numTableLocate(T250_95, current, "corriente", "Cu");

  //Area para calculo de canalizaciones
  const [area] = textTableLocate(T5, calibrePhase, "calibre", "mm2");
  const areaTotal = area * (phases + 2);
  //PVCA
  const [PVCA] = numTableLocate(T4_PVCA, areaTotal, "masDe2", "ich");

  //EMT
  const [EMT] = numTableLocate(T4_EMT, areaTotal, "masDe2", "ich");

  //Array con los datos calculados
  return [
    desc,
    load.toFixed(2),
    voltage,
    current.toFixed(2),
    PTM,
    phases,
    DT,
    calibrePhase,
    calibreN,
    calibreGround,
    caida.toFixed(2),
    PVCA,
    EMT,
  ];
}
