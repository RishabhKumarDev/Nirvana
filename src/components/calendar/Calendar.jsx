import Calendar from 'react-calendar'
import '../calendar/Calendar.css'
const CalendarDisplay = ({calendarVisible , setCalendarVisible}) => {
    return ( 
        <div className={`actual-calendar-wrap ${calendarVisible ? "show" : "hide"}`}>
        <span className='actual-calendar'>
        <Calendar
        onClickDay={(value)=>{ 
            console.log(value);
            setCalendarVisible(false)}}
        />

        </span>
        </div>
     );
}
 
export default CalendarDisplay;