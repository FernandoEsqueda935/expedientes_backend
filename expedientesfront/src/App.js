import "./App.css";
import React from "react";
import CompFormularioRegistro from "./FormularioRegistro"; // Importa el formulario
import EditFormularioRegistro from "./EditFormularioRegistro"; // Importa el formulario
import { BrowserRouter, Route , Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <CompFormularioRegistro/> } />
            <Route path="/edit/:exp_num" element={ <EditFormularioRegistro/> } />
        </Routes>
      </BrowserRouter>
  )
    
}

export default App;
