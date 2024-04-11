import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from '../types/types';

// const initialState = {
//     logged: false,
// };

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user,
    }
}

//Recibe el children lo que lo convierte en un Highordercomponent y 
//esta dentro del AuthContext.Provider
export const AuthProvider = ({ children }) => {

    const [autState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {

        const user = { id: 'ABC', name }

        const action = { type: types.login, payload: user };

        //Esto mantiene el usuario activo en el storage
        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        //Manda a eliminar el user del localStorage
        localStorage.removeItem('user');
        const action = { type: types.logout };
        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{
            ...autState,

            //methods
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
