import React, { createContext } from 'react';
import useFirebases from '../hook/useFirebases';

export const AuthContext = createContext();
const AuthProvide = ({children}) => {
    const allData=useFirebases();
    return (
    <AuthContext.Provider value={allData}>
      {children}
    </AuthContext.Provider>
    );
};

export default AuthProvide;