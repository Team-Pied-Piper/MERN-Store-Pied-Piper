import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout"; //Contenedor Area Publica
//-----PAGINAS LOGIN-----
import { Login } from "./pages/login/Login";
import { Registrar } from "./pages/login/Registrar";
import { ConfirmarCuenta } from "./pages/login/ConfirmarCuenta";
import { NuevoPassword } from "./pages/login/NuevoPassword";
import { OlvidePassword } from "./pages/login/OlvidePassword";
//-----PAGINAS LOGIN-----

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
