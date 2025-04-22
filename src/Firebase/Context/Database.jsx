import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext } from "react";
import { db } from "../FireBaseConfig";

const DatabaseContext = createContext(null);

export const DatabaseProvider = ({ children }) => {
  const createUserInDB = async (user, name = null) => {
    console.log("from database ", user, name);
    const docRef = doc(db,"Users",user.uid);
    const docSnap = await getDoc(docRef);

 if(!docSnap.exists()){
  return setDoc(doc(db, "Users", user.uid), {
    name: name || user.displayName,
    email: user.email,
    createdAt: new Date(),
  });

 }
  };
  return (
    <DatabaseContext.Provider value={{ createUserInDB }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => useContext(DatabaseContext);
