import "../styles/HistoryPage.css";
import InputPage from "./InputPage";
import { useNotes } from "../components/NotesContext";
import { iconCategory, CoverEmojis } from "../components/IconsContainer";
import { FaRegCalendarAlt } from "react-icons/fa";
import CalendarDisplay from "../components/calendar/Calendar";
import { useMemo, useState } from "react";
import { IoRefresh } from "react-icons/io5"; // Refresh icon


const HistoryPage = () => {
    const {notes,deleteNote,handleEdit,formatDate,formatTime} = useNotes();
    const [calendarVisible,setCalendarVisible] = useState(false);
    const [selectedDate,setSelectedDate] = useState(null);
    const showCoverEmoji = (name)=>{
        
            const emoji = CoverEmojis.find((e) => e.name === name);
            if(emoji) return emoji.icon;
    }
    const findIcon=(name)=>{
        for(let category of iconCategory){
            const emoji = category.emojis.find((e) => e.name === name);
            if(emoji) return emoji.icon;
        }
        return null;
    }

   
    const filteredNotes = useMemo(() => {
// what it does is checks for selecteddate if it is not true it returns notes
// which gets maped and shown 
// else if returns filtred note when the selecteddate is true;
// and only re-render when they get changed.
// it reduced the ternory operator ? i was useing to chekc for displying.
        if (!selectedDate) return notes;
        return notes.filter(note => 
            new Date(note.date).toDateString() === selectedDate
        );
    }, [selectedDate, notes]);
    

//# the error is happening because the json structure got changed 

    return ( 
        <>
        <CalendarDisplay  setSelectedDate={setSelectedDate} calendarVisible={calendarVisible} setCalendarVisible={setCalendarVisible} />
        <div className="history-wrap">
            <div className="history-list">
                <div className="heading-history">
                <h2>Your Entries</h2>
                </div>
                <div className="calendar-icon-wrap">
                    <p>Search By Date </p>
                    <span className="calendar-icon">
                        <FaRegCalendarAlt
                        onClick={()=> setCalendarVisible(true)}
                    /></span>
                    <div className="refresh-icon">
                        <span
                        onClick={()=>setSelectedDate(null)}
                         >Refresh list <IoRefresh/> </span>
                    </div>
                </div>
                <ul className="notes-list">
                    {filteredNotes
                    .map((note)=>(
                        <li 
                          key={note.id} 
                          className="note-item">
                           <div className="one-history">
                            <div className="date-display-history">{formatDate(note.date)} </div>
                            <div className="time-display-history">{formatTime(note.date)} </div>
                            <div className="cover-emoji-history">{showCoverEmoji(note.selectedCoverEmoji)}</div>
                             <div className="history-title">{note.title}</div>
                             <div className="history-content">{note.content}</div>
                             <div className="history-emojis">
                                {note.selectedEmojis.map(((name,i) =>{ 
                                    return (
                                    <div key={i} className="emoji-name-wrap-history">
                                    <span  className="single-emoji-display">{findIcon(name)}</span>
                                    <span className="single-name-display">{name}</span>
                                    </div>
                                )}))}
                             </div>
                             <div className="delete-btn"><button onClick={()=>deleteNote(note.id)}>Delete</button></div>
                             <div className="edit-btn"><button onClick={() => handleEdit(note)}>Edit</button></div>
                             
                            
                            </div>
                        </li>
                    ))}
                  
                </ul>
            </div>
            <div className="history-display">
               <div className="input-container "> 
                  <InputPage />
               </div>

            </div>
        </div>
        </>
     );
}
 
export default HistoryPage;