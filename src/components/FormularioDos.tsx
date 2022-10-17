import { useForm } from '../hooks/useForm';

interface FormData {
    postal: string;
    ciudad: string;
};

export const FormularioDos = () => {

    const { ciudad, formulario, handleInputChange, postal } = useForm<FormData>({
        postal: '72580',
        ciudad: 'Puebla'
    });

    // const { ciudad, postal } = formulario;

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Código postal:</label>
                <input
                    className="form-control"
                    name="postal"
                    onChange={ handleInputChange }
                    type="text"
                    value={ postal }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input
                    className="form-control"
                    name="ciudad"
                    onChange={ handleInputChange }
                    type="text"
                    value={ ciudad }
                />
            </div>

            <pre>{ JSON.stringify( formulario ) }</pre>

        </form>
    );
}
