import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-emerald-700 font-black text-5xl capitalize text-center">
        Inicia sesión <span className="text-slate-700">Pied-Piper</span>
      </h1>

      <form className="my-10 bg-white shadow rounded-lg p-8">
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
          ></input>
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-emerald-700 -5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-emerald-800 trasition-colors"
        />
      </form>
      <nav className="ld:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="olvide-password"
        >
          Olvide Mi Contraseña
        </Link>
      </nav>
    </>
  );
};

export { Login };
