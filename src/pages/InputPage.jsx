import EmotionsTracker from "../components/EmotionsTracker";
import NotePad from "../components/NotePad";
import { useNotes } from "../components/NotesContext";
import SaveBtn from "../components/SaveBtn";
import "../styles/InputPage.css";
import InputEmojis from "../components/InputEmojis";


const InputPage = () => {
       
   const {saveNote,
          noteInput,setNoteInput,
          selectedEmojis,setSelectedEmojis,
          selectedCoverEmoji,setSelectedCoverEmoji,
          status,
          isFavourite,
          setIsFavourite,
          setDateAndTime
         } = useNotes();


   const saveInput = () =>{
      try {
         if(!noteInput.title.trim() || !noteInput.content.replace(/<[^>]+/g,"").trim()){
            // if empty add date to title;
            return;
        }
         saveNote(noteInput.title, noteInput.content,selectedEmojis,selectedCoverEmoji,isFavourite);
         setNoteInput({title:'',content:''});
         setSelectedEmojis([]);
         setSelectedCoverEmoji("");
         setIsFavourite(false)
         setDateAndTime(null)
      } catch (error) {
         console.error("coundn't save data")
      }
     
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
            <NotePad noteInput={noteInput} setNoteInput={setNoteInput} status={status}   />
           <SaveBtn onSave={saveInput} />

           </div>

           <div className="cd13">

           </div>
          
        </div>
        </>
     );
}
 
export default InputPage;