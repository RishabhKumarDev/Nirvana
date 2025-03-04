import "../styles/HistoryPage.css";
import InputPage from "./InputPage";
import { useNotes } from "../components/NotesContext";

const HistoryPage = () => {
    const {notes,deleteNote} = useNotes();
    
//# the error is happening because the json structure got changed 

    return ( 
        <>
        <div className="history-wrap">
            <div className="history-list">
                <h2>Your Entries</h2>
                <ul className="notes-list">
                    {notes.map((note)=>(
                        <li 
                          key={note.id} 
                          className="note-item">
                           <div className="one-history">
                             <div className="history-title">{note.title}</div>
                             <div className="history-content">{note.content}</div>
                             <div className="delete-btn"><button onClick={()=>deleteNote(note.id)}>Delete</button></div>
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