import "../styles/NotePad.css";
import { FaHeart ,FaRegClipboard } from "react-icons/fa";
import { useNotes } from "./NotesContext";
import {BsLightbulb } from "react-icons/bs";
import { useState } from "react";
import Prompts from "./Prompts";
import Templates from "./Templates";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';
const NotePad = ({noteInput,setNoteInput}) => {

    const {isFavourite,setIsFavourite,status} = useNotes();
    const [showPrompts,setShowPrompts] = useState(false);
    const [showTemplate,setShowTemplate] = useState(false);
   
    const countWords = ()=>{
       return noteInput.content.replace(/<[^>]*>/g,"").trim().split(" ").filter(word => word !== "").length;
    }
    const countChars = ()=>{
        return noteInput.content.replace(/<[^>]*>/g,"").length
    }
    return ( 
        <>
        <div className={`prompt-shadow ${(showPrompts || showTemplate)? "shadow-open" :""}`} onClick={()=>{setShowPrompts(false)
            ,setShowTemplate(false)
        }}></div>
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
            <div className="notepad-features">
                <div className="counts">
                    <span className="title-char-count">
                     Title Char:{(noteInput.title).length}
                    </span>
                    <span className="note-char-count">
                     Note Char:{countChars()} | Words:{countWords()}
                    </span>
                </div>
                <span className={`prompt-icon ${showPrompts? "feature-true":""}`}
                onClick={()=>setShowPrompts(!showPrompts)}
                ><BsLightbulb/>
                
                <div className={`prompts-container ${showPrompts? "prompt-template-visible":""}`} > 
                    <Prompts/>
                </div>
                </span>
                <span className={`template-icon ${showTemplate? "feature-true" : ""}`}
                onClick={()=>setShowTemplate(!showTemplate)}
                ><FaRegClipboard/>
                <div className={`templates-container ${showTemplate? "prompt-template-visible":""}`}>
                    <Templates/>
                </div>
                </span>

                
            </div>
            
            <div className="note-content">

                <ReactQuill 
                className="write-note"
                theme="snow"
                value={noteInput.content}
                onChange={(value) => setNoteInput({...noteInput,content:value})}
                />



            {/* <textarea 
                placeholder="Your Entry Here" 
                value={noteInput.content || ""}
                onChange={(e)=> setNoteInput({...noteInput,content:e.target.value})}
                ></textarea> */}
            </div>
        </div>
        </>
     );
}
    
export default NotePad;