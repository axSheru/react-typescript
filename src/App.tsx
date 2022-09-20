import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <h1>Hola mundo - TypeScript</h1>
      <hr />
      
      
      <h2 className="mt-5">useState</h2>
      <hr />
      <Counter />
      <Usuario />

      <h2 className="mt-5">useEffect - useRef</h2>
      <hr />
      <TimerPadre />
    </>
  );
}

export default App;
