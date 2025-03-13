import "../styles/HistoryPage.css";
import InputPage from "./InputPage";
import { useNotes } from "../components/NotesContext";
import { iconCategory, CoverEmojis } from "../components/IconsContainer";
const HistoryPage = () => {
    const {notes,deleteNote,handleEdit} = useNotes();

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
                             
                             {console.log(note)}
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