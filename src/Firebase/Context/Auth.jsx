import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../FireBaseConfig";
import { createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const SignUpUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  const popUpsign = async () => {
    return await signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider
      value={{
        SignUpUser,
        singInUser,
        popUpsign,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
