import { useState } from "react";
import NotePad from "../components/NotePad";
import { useNotes } from "../components/NotesContext";
import SaveBtn from "../components/SaveBtn";
import "../styles/InputPage.css";

const InputPage = () => {

   const {saveNote} = useNotes();
   const [noteInput,setNoteInput] = useState({title:'',content:''});

   const saveInput = () =>{
      if(!noteInput.title.trim() || !noteInput.content.trim()){
         return;
     }
      saveNote(noteInput.title, noteInput.content);
      setNoteInput({title:'',content:''});
   }

    return ( 
        <div className="input-wrap">
           <div className="cd1">1</div>
           <div className="cd2">2</div>
           <div className="cd3">3</div>
           <div className="cd4">4</div>
           <div className="cd5">5</div>
           <div className="cd6">6</div> 
           <div className="cd7">7</div>
           <div className="cd8">8</div>
           <div className="cd9">9</div>
           <div className="cd10">10</div>
           <div className="cd11">11</div>
           <div className="cd12">
            <NotePad noteInput={noteInput} setNoteInput={setNoteInput} />
           </div>
           <div className="cd13">
            <SaveBtn onSave={saveInput} />
           </div>


        </div>
     );
}
 
export default InputPage;