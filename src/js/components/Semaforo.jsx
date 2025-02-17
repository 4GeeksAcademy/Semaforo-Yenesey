import React from "react";

export default function Semaforo({ color, elegirColor }) {
  return (
    <div className="semaforo">
      <div className="fondo">
        <div
          className={`luz rojo ${color === "rojo" ? "encendida" : ""} ${color === "rojo-purpura" ? "purpura" : ""}`}
          onClick={() => elegirColor("rojo")}
        ></div>
        <div
          className={`luz amarillo ${color === "amarillo" ? "encendida" : ""} ${color === "amarillo-purpura" ? "purpura" : ""}`}
          onClick={() => elegirColor("amarillo")}
        ></div>
        <div
          className={`luz verde ${color === "verde" ? "encendida" : ""} ${color === "verde-purpura" ? "purpura" : ""}`}
          onClick={() => elegirColor("verde")}
        ></div>
      </div>
    </div>
  );
}
