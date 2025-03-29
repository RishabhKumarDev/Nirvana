import "../styles/HistoryPage.css";
import InputPage from "./InputPage";
import { useNotes } from "../components/NotesContext";
import { iconCategory, CoverEmojis } from "../components/IconsContainer";
import { FaRegCalendarAlt } from "react-icons/fa";
import CalendarDisplay from "../components/calendar/Calendar";
import { useEffect, useMemo, useRef, useState } from "react";
import { IoRefresh } from "react-icons/io5"; // Refresh icon
import { FaHeart } from "react-icons/fa";
import { PiDotsThreeCircleDuotone } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { MdDelete,MdDoNotTouch,MdEdit } from "react-icons/md";

const HistoryPage = () => {
    const {notes,deleteNote,handleEdit,formatDate,formatTime,draft} = useNotes();
    const [calendarVisible,setCalendarVisible] = useState(false);
    const [selectedDate,setSelectedDate] = useState(null);
    const [showFavourite,setShowFavourite] = useState(false);
    const [openMenuId,setOpenMenuId] = useState(null);

    const handleMenuId = (id)=>{
        setOpenMenuId((prev) => (prev === id? null : id));
    }

    let menuRef = useRef();
    useEffect(()=>{
        const handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpenMenuId(null);
            }
        }

        document.addEventListener('click',handler)
        return ()=> document.removeEventListener('click',handler)
    },[])



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
    const handelColor = (name)=>{
        // instead of using if statement it is more clean;
    const colorMap = {
        rad: "rad",
        good: "good",
        meh: "meh",
        bad: "bad",
        awful: "awful"
    }
    return colorMap[name] || "";
       
   }
   
// what it does is checks for selecteddate if it is not true it returns notes
// which gets maped and shown 
// else if returns filtred note when the selecteddate is true;
// and only re-render when they get changed.
// it reduced the ternory operator ? i was useing to chekc for displying.
const filteredNotes = useMemo(() => {
if(showFavourite){
    return notes.filter(note => note.isFavourite === true);
} if(selectedDate){
    return notes.filter(note => new Date(note.date).toDateString() === selectedDate)
}

return notes.filter(note => note.draft !== true);  // had to add draft becasue auto save caused history to show without final save ( better approach could be saving the auto save entry in local storage )
// and very intresting thing we are checking !== true because all the prev. data don't have draft key so if i check if the draft is false i.e === false; will won't return any prev. data as they don't contain draft key so the responce will undefined 
// but when we check !== true it checks only if it is not true any thing else will be fine.
    }, [selectedDate, notes,showFavourite]);
    

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
                    <span className="calendar-icon"  onClick={()=> {setCalendarVisible(true),setShowFavourite(false)}} >
                    <p>Search </p>
                        <FaRegCalendarAlt /></span>
                    <div className="favourite-list-wrap">
                        <span className="favourite-show"
                        onClick={()=> setShowFavourite(!showFavourite)}
                        >
                            <p>list</p> <FaHeart/>
                        </span>
                    </div>
                    <div className="refresh-icon">
                        <span
                        onClick={()=> {setSelectedDate(null)
                            ,setShowFavourite(false)
                         } }
                         >Refresh<IoRefresh/> </span>
                    </div>
                </div>
                <ul className="notes-list">

                    <div className={`no-entries ${filteredNotes.length === 0 ? "yet":""}`}>
                        <h1>No</h1>
                        <h2>Entries</h2>
                        <h3>Found</h3>
                    </div>
                    {filteredNotes
                    .map((note)=>(
                        <li 
                          key={note.id} 
                          className="note-item">
                            <div className="main-one-history-date-wrap">
                            <div className="date-display-history">{formatDate(note.date)} </div>
                            <div className="one-hirtory-coveremoji-wrap">
                            <div className={`cover-emoji-history ${ handelColor(note.selectedCoverEmoji)}`} >{showCoverEmoji(note.selectedCoverEmoji)}</div>

                           <div className="one-history">
                            <div className="time-coveremojiname-fav-edit-wrap">
                                <div className="time-coveremoji-wrap">
                                <div className={`cover-emoji-name-history ${ handelColor(note.selectedCoverEmoji)}`}
                                >
                                    {note.selectedCoverEmoji}
                                </div>
                                <div className="time-display-history">{formatTime(note.date)} </div>

                                </div>
                                <div className="fav-edit-wrap">
                                <div className="favourite-icon-wrap"> <span className={`favourite-history ${note.isFavourite? "favourite-history-true" : ""}`}>{<FaHeart/>}</span> </div>
                                 <div   className="three-dot-icon-container">
                                    <span className="threedot-icon" onClick={(e)=>{e.stopPropagation();handleMenuId(note.id);}}><PiDotsThreeCircleDuotone />
                                    <div ref={menuRef} className={`edit-delete-container ${openMenuId === note.id ? "three-dot-true":""}`}>
                            <div className="delete-btn"><button onClick={()=> deleteNote(note.id)}><span className="delete-icon"><MdDelete /> </span> Delete</button></div>
                             <div onClick={() => handleEdit(note)} className="edit-btn"><button > <span className="edit-icon">  <MdEdit/></span> Edit it</button></div>
                                    </div>
                                    </span>
                                 </div>
                                </div>
                            </div>
                            <div className="history-emojis">
                                {note.selectedEmojis.map(((name,i) =>{ 
                                    return (
                                    <div key={i} className="emoji-name-wrap-history">
                                        <div className="emoji-name-container-history">
                                        <span className="dot-icon"><GoDotFill/></span>
                                    <span  className={`single-emoji-display ${ handelColor(note.selectedCoverEmoji)}`} >{findIcon(name)}</span>
                                    <span className="single-name-display">{name}</span>
                                    </div>
                                    </div>
                                )}))}
                             </div>
                             <div className="history-title">{note.title}</div>
                             <div className="history-content"><p>
                             {(note.content || "").replace(/<[^>]+>/g," ").trim()} {/* <-- this is to display the notes wihtout html elements what happening was besause react-quill act as html editor so it was pushing whole html element in api and display was desplaying all the elements too */}
                                </p></div> 
                                
                            {note.image && <div className="note-image-display">
                                <img className="actual-image-history" src={note.image} alt="uploaded image" />
                             </div>}
                             </div>
                             
                            </div>
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