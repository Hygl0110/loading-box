import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <p>
          Conductores Fase y Neutro: T316-16 NTC 2050 - diseño a 60° para
          conductores canalizados
        </p>
        <p>Condutor Tierra : T250-95 NTC 2050 - conductor puesta a tierra</p>
        <p>conduit PVC tipo A y conduit EMT: T4 NTC 2050 </p>
        <br />
        <a
          href="https://www.minenergia.gov.co/documents/3809/Anexo_General_del_RETIE_vigente_actualizado_a_2015-1.pdf"
          target="_blanck"
        >
          Anexo General del RETIE 2013
        </a>
        <br />
        <a
          href="https://repositorio.utp.edu.co/bitstream/handle/11059/1994/62131924C149_anexo.pdf?sequence=2"
          target="_blanck"
        >
          Codigo Electrico Colombiano NTC 2050
        </a>

        <br />
        <p>by: Daniel Cardona</p>
      </footer>
    </>
  );
};

export default Footer;
