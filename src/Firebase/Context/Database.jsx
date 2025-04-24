import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../FireBaseConfig";
import { useAuth } from "./Auth";

const DatabaseContext = createContext(null);

export const DatabaseProvider = ({ children }) => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const createUserInDB = async (user, name = null) => {
    console.log("from database ", user, name);
    const docRef = doc(db, "Users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return setDoc(doc(db, "Users", user.uid), {
        name: name || user.displayName,
        email: user.email,
        createdAt: new Date(),
      });
    }
  };

  useEffect(() => {
    if (!user) return;
    const getUserFromDB = async () => {
      try {
        const docRef = doc(db, "Users", user.uid);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
          console.log("Document Data", docSnap.data());
        } else {
          console.log("No document found");
        }
      } catch (error) {
        console.log("database get data ", error);
      }
    };

    getUserFromDB();
  }, [user]);
  return (
    <DatabaseContext.Provider value={{ createUserInDB,userData }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => useContext(DatabaseContext);
