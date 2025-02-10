import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// CSS
import '../styles/index.css';

// Components
import Semaforo from './components/Semaforo';

function App() {
  const [color, setColor] = useState(""); 

  function elegirColor(nuevoColor) {
    setColor(nuevoColor); 
  }

  return (
    <div>
      <Semaforo color={color} elegirColor={elegirColor} /> {/* Pasamos 'color' y 'elegirColor' como props */}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
