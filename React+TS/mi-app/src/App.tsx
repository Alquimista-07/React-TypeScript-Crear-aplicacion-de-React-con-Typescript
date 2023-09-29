import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';
import { ContadorReducer } from './components/ContadorReducer';
import { Formulario } from './components/Formulario';
import { Formulario2 } from './components/Formulario2';

function App() {
  return (
    // Recordemos que cuando colocamos <></> es un fragmento vacío ya que recordemos que react cumple con una regla la cual 
    // dice que siempre tiene que haber una etiqueta que contenga a otra y a su vez en JS dice que no voy a usar nada allí 
    // y de esta forma podemos evitar la etiqueta.
    <>
      <h1>React + TypeScript</h1>
      <hr />

      {/* Importamos el componente y recordemos que podemos cerrar la etiqueta solo con /> sin indicar el nombre del componente
          y admás recordemos que siempre se tiene que realizar el cierre de las etiquetas */
      }
      { /* useState */ }
      <Counter/>

      <Usuario/>

      { /* useEffect - useRef */ }
      <TimerPadre/>

      {/* useReducer */}
      <ContadorReducer/>

      {/* Sin Usar y Usando Custom Hook */}
      {/* Sin Custom Hook */}
      <Formulario/>
      <br />
      {/* Con Custom Hook */}
      <Formulario2/>
      <br />

    </>
  );
}

export default App;
