import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Productos from "./paginas/Productos";
import Registro from "./paginas/Registro";
import Carrito from "./paginas/Carrito";

import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contraseña from "./paginas/Contraseña";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Contraseña" element={<Contraseña />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
