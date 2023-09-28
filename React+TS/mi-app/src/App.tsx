import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

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
      <Counter/>

      <Usuario/>
      
    </>
  );
}

export default App;
