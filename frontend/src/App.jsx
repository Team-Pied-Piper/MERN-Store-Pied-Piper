import { RutasPublicas } from "./router/RutasPublicas";

console.log(import.meta.env.VITE_BACKEND_URL);

function App() {
  return (
    <div className="layout">
      <RutasPublicas />
    </div>
  );
}

export default App;
