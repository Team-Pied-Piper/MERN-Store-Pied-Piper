import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alerta } from "../../Alerta";

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || email.length < 6) {
      setAlerta({
        msg: "El correo es obligatorio",
        error: true,
      });
      return;
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password`,
        { email }
      );
      setAlerta({
        msg: data.msg,
        error: false,
      });
      console.log(data);
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
        Recupera tu acceso
        <span className="text-slate-700"> Pied-Piper</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="my-10 bg-white shadow rounded-lg p-8"
        onSubmit={handleSubmit}
      >
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
        <input
          type="submit"
          value="Enviar Instrucciones"
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
          to="/registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
};

export { OlvidePassword };