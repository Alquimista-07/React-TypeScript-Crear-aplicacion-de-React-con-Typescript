import { useState } from "react";

interface User {
    uid: string;
    name: string;
}

export const Usuario = () => {

    // Como nuestro useState no va a tener un valor inicial, esto nos va a arrojar un error posteriormente
    // cuando queramos asignar un valor ya que va a indicar que no se puede asingar undefined así le estamos
    // asignanado el valor más adelante y esto es debido al tipado estricto, por lo tanto lo que podemos hacer
    // es crear una clase o una interface para ponerle el tipado y lo indicamos dentro de <> y de esta forma 
    // indicamos que va a manejar. Adicionalmente también podríamos inicializarlo con valores pero hay que tener
    // en cuenta que tiene que seguir el tipo que hayamos indicado.
    /*
        Ej:

        const [user, setUser] = useState<User>({
            uid: '',
            name: ''
        });

    */
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Fernando Herrera'
        });
    }

  return (
    <div className="mt-5">
        <h3>Usuario: useState</h3>

        <button
            className="btn btn-outline-primary"
            onClick={ login }>
            Login
        </button>

        {
            (!user) 
            ? <pre>No Hay Usuario!</pre>
            : <pre>{ JSON.stringify( user ) }</pre>
        }

    </div>
  )
}
