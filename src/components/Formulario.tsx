// import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
};

export const Formulario = () => {

    const { formulario, handleInputChange } = useForm<FormData>({
        email: 'alex@test.com',
        nombre: 'Alex Paredes',
        edad: 27
    });

    const { email, nombre, edad } = formulario;

    /* const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    });

    const handleInputChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        
        const { name, value } = target;

        console.log( name );
        console.log( value );

        setFormulario({
            ...formulario,
            [ name ]: value
        });
    }; */

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    className="form-control"
                    name="email"
                    onChange={ handleInputChange }
                    type="email"
                    value={ email }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                    className="form-control"
                    name="nombre"
                    onChange={ handleInputChange }
                    type="text"
                    value={ nombre }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input
                    className="form-control"
                    name="edad"
                    onChange={ handleInputChange }
                    type="number"
                    value={ edad }
                />
            </div>

            <pre>{ JSON.stringify( formulario ) }</pre>

        </form>
    );
}
