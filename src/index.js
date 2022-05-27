import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App'

// Para realizar enrutamiento
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Contenedor(props) {
//   const { titulo, children } = props;
//   return (
//     <div className="contenedor">
//       <h1>{titulo}</h1>
//       <div>{children}</div>
//     </div>
//   );
// }

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

