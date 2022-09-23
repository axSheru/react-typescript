import { useReducer } from "react";

const initialState = {
    contador: 0
};

type ActionType = (
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'personalizado', payload: number }
);

const contadorReducer = ( state: typeof initialState, action: ActionType ) => {
    
    switch ( action.type ) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            };

        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            };

        case 'personalizado':
            return {
                ...state,
                contador: action.payload
            };
    
        default:
            return state;
    }

};


export const ContadorReducer = () => {

    const [ contadorState , dispatch ] = useReducer( contadorReducer, initialState );

    return (
        <>
            <h2>Contador: { contadorState.contador }</h2>
            <button
                className="btn btn-outline-primary mx-2"
                onClick={ () => dispatch({ type: 'incrementar' }) }
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary mx-2"
                onClick={ () => dispatch({ type: 'decrementar' }) }
            >
                -1
            </button>
            <button
                className="btn btn-outline-warning mx-2"
                onClick={ () => dispatch({ type: 'personalizado', payload: 247 }) }
            >
                ?
            </button>
        </>
    );
};
