import { IoInformationCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import "../Notification/Notification.css";
import { useNotification } from "./NotificationContext";

const Notification = () => {
    const {notification} = useNotification();
const handleNotificationColor =(type)=>{
    const colorMap ={
        sucess :"green",
        error:"red",
        empty:"yellow",
    }
    return colorMap[type] || "";
  
}
   if (!notification.message) return null;
    return ( 
        <div className={"notification-container"}>
        <div className={`notification ${handleNotificationColor(notification.type)}`}>
            <span className="notification-icon"> <IoInformationCircleSharp /></span>
            <span className={`notification-message `}>{notification.message}</span>
            <span className="notification-remove-icon"> <MdCancel /></span>
        </div>
        </div>
     );
}
 
export default Notification;