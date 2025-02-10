import React from "react";

export default function Semaforo({ color, elegirColor }) {
  return (
    <div className="semaforo">
      <div className="fondo">
        <div
          className={`luz rojo ${color === "rojo" ? "encendida" : ""}`}
          onClick={() => elegirColor("rojo")}
        ></div>
        <div
          className={`luz amarillo ${color === "amarillo" ? "encendida" : ""}`}
          onClick={() => elegirColor("amarillo")}
        ></div>
        <div
          className={`luz verde ${color === "verde" ? "encendida" : ""}`}
          onClick={() => elegirColor("verde")}
        ></div>
      </div>
    </div>
  );
}
