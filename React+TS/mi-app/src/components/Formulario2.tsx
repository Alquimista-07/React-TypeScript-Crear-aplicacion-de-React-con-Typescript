// NOTA: Un problema que se pretende solucionar con un Custom Hook es que por ejemplo si al día de mañana nosotros tenemos
//       que crear otro formulario con otros campos, entonces nuevamente tenemos que ir y crear nuevamente la función
//       que actualiza el estado del formulario y se le agregaron cosas y puede tener otra información

import { useForm } from "./hooks/useForm";

// Para solucionar el tema del asignar el tipo a nuestro Custom Hook podemos usar los tipos genéricos con una interface para indicar
// como va a luecir el formulario. También podríamos usar un type y typeof para definirlo como se realizo en el ejercicio del 
// ContadorReducer. Y este FormData lo asignaríamos al useForm. Pero hay que tener en cuenta que interface es opcional y serviría 
// más para tener una referencia ya que al usar el tipo genérico T en el CustomForm ya va a tomar de forma automática los tipos pero pues 
// no está de más colocarlo como una ayuda.
interface FormData {
  postal : string;
  ciudad : string;
  region : string;
  isla   : string;
}

export const Formulario2 = () => {

    // Acá vamos a llamar mi Custom Hook que generlamente se almacena en la carpeta llamada hooks.
    // Y ya con esto si comparamos el código del Formulario y Formulario2 nos damos cuenta que es
    // mucho más sencillo y podemos reutilizar el código.
    const { formulario, handleChange } = useForm<FormData>({
      postal: '100-0000',
      ciudad: 'Tokio',
      region: 'Kantō',
      isla: 'Honshū'
    });

    // Desestructuramos para obtener los campos pero esto lo podemos obviar
    // simplemente desestructurando con los spred (...) directamente el formulario 
    // al momento de exportar en el useForm()
    const { postal, ciudad, region, isla } = formulario;
    // Y al momento de user el Custom Hook lo haríamos de la siguiente forma:
    //
    // const { postal, ciudad, region, isla, handleChange, formulario } = useForm<FormData>({
    //

  return (
    // OJO: Es atributo name de los input es importante en este caso ya que lo usamos para tener la referencia al mismo
    <form autoComplete="off" className="mt-5 mb-5">
        <h2>Formulario: Usando CustomHook</h2>
        <div className="mb-3">
            <label className="form-label">Código Postal</label>
            <input type="text" className="form-control" name="postal"
            // NOTA: Bien podríamos hacer una función de flecha que recibe el evento y lo manda a la función (ev) => handleChange(ev)
            //       y eso funcionaría. Pero recordemos que en JavaScript si estamos tomando un argumento y ese argumento lo mandamos
            //       a una función que está interna lo podemos ovbiar pomer la declaración de la función y unicamente mandar como 
            //       referencia la función que queremos llamar.
                   onChange={ handleChange }
            // Adicinalmente podríamos asingar el valor
                   value={ postal }/>
        </div>
        <div className="mb-3">
            <label className="form-label">Ciudad</label>
            <input type="text" className="form-control" name="ciudad"
                   onChange={ handleChange }
                   value={ ciudad }/>
        </div>

        <div className="mb-3">
            <label className="form-label">Región</label>
            <input type="text" className="form-control" name="region"
                   onChange={ handleChange }
                   value={ region }/>
        </div>

        <div className="mb-3">
            <label className="form-label">Isla</label>
            <input type="text" className="form-control" name="isla"
                   onChange={ handleChange }
                   value={ isla }/>
        </div>

        <pre>{ JSON.stringify(formulario) }</pre>
    </form>
  )
}
