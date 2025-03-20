import "../styles/NotePad.css";
import { FaHeart } from "react-icons/fa";
import { useNotes } from "./NotesContext";


const NotePad = ({noteInput,setNoteInput}) => {

    const {isFavourite,setIsFavourite,status} = useNotes();
    return ( 
        <div className="note-container">
            <div className="note-title">
                <input 
                    type="text" 
                    placeholder="Entry Title"
                    value={noteInput.title || ""}
                    onChange={(e)=>{setNoteInput({...noteInput,title:e.target.value})
                    }} //earlier no destructuring why now. reason is earlier the tiltle it self was an element and now the title is inside a object called noteInput so destructuring is needed to insert value in ob,arr.
                    
                     />
                    <div className="entry-title-element">
                    <span className={`favourite ${isFavourite ? "favourite-selected" : ""}`}
                    onClick={() => setIsFavourite(!isFavourite)}
                    ><FaHeart /></span>

                        <span className="status">{status}</span> 
                    </div>
            </div>
            <div className="note-content">

            <textarea 
                placeholder="Your Entry Here" 
                value={noteInput.content || ""}
                onChange={(e)=> setNoteInput({...noteInput,content:e.target.value})}
                ></textarea>
            </div>
        </div>
     );
}
    
export default NotePad;