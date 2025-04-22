import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../FireBaseConfig";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const checkUser = onAuthStateChanged(auth,(user) => {
       setUser(user || null)
       setLoading(false);
       console.log(user)

    })
  console.log(user,"state user")


    return () => checkUser();
  },[])

  const SignUpUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  const popUpsign = async () => {
    return await signInWithPopup(auth, provider);
  };
 
  const signOutUser = async () =>{
    return await signOut(auth);
  }
  return (
    <AuthContext.Provider
      value={{
        SignUpUser,
        singInUser,
        popUpsign,
        user,
        signOutUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
