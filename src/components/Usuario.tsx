import { useState } from "react";

interface User {
    uid: string;
    name: string;
};

export const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Alex'
        });
    };

    return (
        <div className="mt-5">
            <h3>Usuario:</h3>
            <button
                className="btn btn-outline-primary mt-4"
                onClick={ login }
            >
                Login
            </button>

            {
                ( ! user )
                    ? <pre className="mt-2">No hay usuario</pre>
                    : <pre className="mt-2">{ JSON.stringify(user) }</pre>
            }
            
        </div>
    );
};
