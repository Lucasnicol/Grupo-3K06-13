import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';

import Clientes from './components/clientes/Clientes'
import Alimento from './components/alimentos/Alimentos'

import Animales from './components/animales/Animales'

import Consultas from './components/consultas/Consultas'

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/animales" element={<Animales />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/consultas" element={<Consultas />} />
              <Route path="/alimento" element={<Alimento />} />

              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>

    
    </div>
  );
}

export default App;
