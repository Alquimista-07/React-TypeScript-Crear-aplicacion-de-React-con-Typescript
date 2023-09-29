import { ChangeEvent, useState } from "react"

export const Formulario = () => {

    // NOTA: Esta parte del useState y la función handle es la que se quiere hacer como un Custom Hook, ya que permite 
    //       reutilizar mucho el código de manera que los componentes, especialmente los funcional components queden
    //       sencillos de hacer. De momento acpa se va a hacer de la forma tradicional para ver la comparativa. 
    //       Los archivos son Formulario y Formulario2
    const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    });

    // Esta función va a ser llamada cuando el input cambie y a su ve esta va a llamar el setFormulario
    // para actualizar el estado del formulario. En este caso como estamos usando el onChange el tipo es
    // ChangeEvent que a su vez no lo podemos dejar genérico por lo tanto tenemos que indicarle de que tipo
    // es ya que puede ser un input, un select, un radio o cualquier objeto html. También teniendo en cuenta
    // que lo que se recibe es un evento podemos desestructurar para obtener solo lo que nos interesa que en 
    // este caso es el target y este ya podemos extraer el name y value
    const handleChange = ( { target } : ChangeEvent<HTMLInputElement> ) => {
       const { name, value } = target;
       
       // Ahora vamos a usar el setFormulario para actualizar el estado y capturar los valores. Adicionalmente 
       // el formulario podría tener un montón de cambios por lo tanto se recomienda romper la relación con el 
       // spred y cambiar unicamente la propiedad que esta cambiando en este caso el email
       setFormulario({
        ...formulario,
        // Para obtener el valor computamos entre llaves [] y le asignamos su valor que es value
        [ name ]: value
       })
    }

  return (
    // OJO: Es atributo name de los input es importante en este caso ya que lo usamos para tener la referencia al mismo
    <form autoComplete="off" className="mt-5 mb-5">
        <h2>Formulario: Sin CustomHook</h2>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email"
            // NOTA: Bien podríamos hacer una función de flecha que recibe el evento y lo manda a la función (ev) => handleChange(ev)
            //       y eso funcionaría. Pero recordemos que en JavaScript si estamos tomando un argumento y ese argumento lo mandamos
            //       a una función que está interna lo podemos ovbiar pomer la declaración de la función y unicamente mandar como 
            //       referencia la función que queremos llamar.
                   onChange={ handleChange }/>
        </div>
        <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" name="nombre"
                   onChange={ handleChange }/>
        </div>

        <pre>{ JSON.stringify(formulario) }</pre>
    </form>
  )
}
