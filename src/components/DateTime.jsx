import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNotes } from "./NotesContext";
import { useEffect } from "react";

const DateTime = () => {

    const {formatDate,formatTime,dateAndTime,setDateAndTime} = useNotes();

    // useEffect(() =>{
    //     if(dateAndTime){
    //         setDateAndTime(new Date(dateAndTime));
    //     }else{
    //         setDateAndTime(new Date())
    //     }
    // },[dateAndTime]) 

    // dateAndTime? setDateAndTime(new Date(dateAndTime)) : setDateAndTime(new Date());
    const validDate = dateAndTime ? new Date(dateAndTime) : new Date();
    return ( 
        <>

<span className="date-display"><FaRegCalendarAlt/>{formatDate(validDate)}</span>
<span className="time-display"> <AiOutlineClockCircle /> {formatTime(validDate)}</span>
        </>
     );
}
 
export default DateTime;