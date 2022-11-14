import { useState } from "react";
import { Link } from "react-router-dom";
import { Alerta } from "../../Alerta";
import axios from "axios";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }
    if (password.length < 6) {
      setAlerta({
        msg: "Las contraseñas es muy corta, agrega minimo 6 caracteres ",
        error: true,
      });
      return;
    }
    setAlerta({});
    //CREAR USUARIO EN API

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/usuarios`,
        {
          nombre,
          email,
          password,
        }
      );
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setNombre("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-emerald-700 font-black text-5xl capitalize text-center">
        Crea tu cuenta <span className="text-slate-700">Pied-Piper</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        className="my-10 bg-white shadow rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase tex-gray-600 block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>
        <div className="my-5">
          <label
            className="uppercase tex-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Correo
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingresa tu correo"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="my-5">
          <label
            className="uppercase tex-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="my-5">
          <label
            className="uppercase tex-gray-600 block text-xl font-bold"
            htmlFor="password2"
          >
            Repetir Contraseña
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repite tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          ></input>
        </div>
        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-emerald-700 mb -5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-emerald-800 trasition-colors"
        />
      </form>
      <nav className="ld:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvide-password"
        >
          Olvide Mi Contraseña
        </Link>
      </nav>
    </>
  );
};

export { Registrar };
