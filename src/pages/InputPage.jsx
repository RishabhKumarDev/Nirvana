import EmotionsTracker from "../components/EmotionsTracker";
import NotePad from "../components/NotePad";
import { useNotes } from "../components/NotesContext";
import SaveBtn from "../components/SaveBtn";
import "../styles/InputPage.css";
import InputEmojis from "../components/InputEmojis";


const InputPage = () => {
       
   const {saveNote,noteInput,setNoteInput,selectedEmojis,setSelectedEmojis,selectedCoverEmoji,setSelectedCoverEmoji} = useNotes();

   const saveInput = () =>{
      if(!noteInput.title.trim() || !noteInput.content.trim()){
         return;
     }
      saveNote(noteInput.title, noteInput.content,selectedEmojis,selectedCoverEmoji);
      setNoteInput({title:'',content:''});
      setSelectedEmojis([]);
      setSelectedCoverEmoji("");
      console.log("save",setSelectedCoverEmoji) // remove 
   }

    return ( 
      <>
      <div className="start-emotion">
         <EmotionsTracker selectedCoverEmoji={selectedCoverEmoji} setSelectedCoverEmoji={setSelectedCoverEmoji} /> 
      </div>
        <div className="input-wrap">
           <div className="cd1"> <h1>What have been up to?</h1></div>
           <InputEmojis selectedEmojis={selectedEmojis} setSelectedEmojis={setSelectedEmojis} />
           
           <div className="cd12">
            <NotePad noteInput={noteInput} setNoteInput={setNoteInput} />
           </div>
           <div className="cd13">
            <SaveBtn onSave={saveInput} />
           </div>
        </div>
        </>
     );
}
 
export default InputPage;