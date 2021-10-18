import React, { createContext } from 'react';
import useFairebase from '../hooks/useFirebase';

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFairebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;