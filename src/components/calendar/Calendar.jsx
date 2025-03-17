import { IoClose } from "react-icons/io5"; // Close icon

import Calendar from 'react-calendar'
import '../calendar/Calendar.css'
const CalendarDisplay = ({calendarVisible , setSelectedDate , setCalendarVisible}) => {
    const today = new Date();
    return ( 
        <div className={`actual-calendar-wrap ${calendarVisible ? "show" : "hide"}`}>
            <span className="cancle-icon">
         <IoClose
         onClick={()=>setCalendarVisible(false)}
         />
        </span>
        <span className='actual-calendar'>
        <Calendar
        tileClassName={({date})=>{
            if (date.toDateString() === today.toDateString()) return "today-highlight";
        if (date > today) return "future-date"; // Your existing class for future dates
        return "";
        
        }}
        
        maxDate={today} // Disable future dates
        // minDate={new Date(today.getFullYear(), today.getMonth(), 1)} // Disable past months
        // defaultActiveStartDate={today} // Ensure calendar opens on the current month
        showNeighboringMonth={false} // Hide previous and next month's dates
        nextLabel={null}
        next2Label={null}
        
        onClickDay={(value)=>{ 
            setCalendarVisible(false)
            setSelectedDate(new Date(value).toDateString())
        }}
        />

        </span>
        
        </div>
     );
}
 
export default CalendarDisplay;