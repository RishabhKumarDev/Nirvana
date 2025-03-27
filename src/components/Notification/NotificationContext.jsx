import { createContext, useContext, useEffect,useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {
    const [notification,setNotification] = useState({message:"",type:""});

    useEffect(()=>{
        if(notification.message){
         const timer =   setTimeout(() => {
                setNotification({...notification,message:"",type:""})
            }, 3000);
            return ()=> clearTimeout(timer);
        }

    },[notification.message])

    return ( <NotificationContext.Provider value={{
        notification,
        setNotification
    }}>

{children}
    </NotificationContext.Provider> );
}
export const useNotification = () => useContext(NotificationContext)