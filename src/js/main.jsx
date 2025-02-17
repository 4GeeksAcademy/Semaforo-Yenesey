import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// CSS
import '../styles/index.css';

// Components
import Semaforo from './components/Semaforo';


// He añadido un SetInterval que cambia de color como un semaforo real
function App() {
  const [color, setColor] = useState("rojo");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => {
        if (prevColor === "rojo") return "verde";
        if (prevColor === "verde") return "amarillo";
        return "rojo";
      });
    }, color === "amarillo" ? 3000 : 10000);

    return () => clearInterval(intervalId);
  }, [color]);

  function elegirColor(nuevoColor) {
    setColor(nuevoColor);
  }

  function colorRnd() {
    // color random
    const colores = ["rojo", "amarillo", "verde"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(`${colorAleatorio}`);
  }

  function colorPurple() {
    // Purpura
    const colores = ["rojo", "amarillo", "verde"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(`${colorAleatorio}-purpura`);
  }

  return (
    <div>
      <Semaforo color={color} elegirColor={elegirColor} />
      <button onClick={colorPurple}>Purpura!</button>
      <button onClick={colorRnd}>Random</button>
    </div>
  );
}

  // Render
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
