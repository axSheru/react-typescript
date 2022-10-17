import { ChangeEvent, useState } from 'react';

// export function useForm<T>( initSate: T )
export const useForm = <T extends Object>( initState: T ) => {

    const [formulario, setFormulario] = useState( initState );

    const handleInputChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        
        const { name, value } = target;

        console.log( name );
        console.log( value );

        setFormulario({
            ...formulario,
            [ name ]: value
        });
    };

    return {
        formulario,
        handleInputChange,
        ...formulario
    };

};