import { getAuth } from "firebase/auth";
import { app } from "../FireBaseConfig";
import { createContext } from "react";
import { useContext } from "react";


const auth = getAuth(app); 
const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const logInUser = () =>{
        
    }
    return ( 
        <AuthContext.Provider  >
            {children}
        </AuthContext.Provider>
     );
}

export const UseAuth = () => useContext(AuthContext);