import { IoInformationCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import "../Notification/Notification.css";

const Notification = ({message}) => {
    return ( 
        <div className="notification-container">
        <div className="notification">
            <span className="notification-icon"> <IoInformationCircleSharp /></span>
            <span className="notification-message">{message}</span>
            <span className="notification-remove-icon"> <MdCancel /></span>
        </div>
        </div>
     );
}
 
export default Notification;