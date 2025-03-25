import EmotionsTracker from "../components/EmotionsTracker";
import NotePad from "../components/NotePad";
import { useNotes } from "../components/NotesContext";
import SaveBtn from "../components/SaveBtn";
import "../styles/InputPage.css";
import InputEmojis from "../components/InputEmojis";
import Notification from "../components/Notification/Notification";


const InputPage = () => {
       
   const {saveNote,
          noteInput,setNoteInput,
          selectedEmojis,setSelectedEmojis,
          selectedCoverEmoji,setSelectedCoverEmoji,
          status,
          isFavourite,
          setIsFavourite,
          setDateAndTime,
          notificationMessage
         } = useNotes();

      
         
   const saveInput = () =>{
      try {
         const plainTextContent = noteInput.content.replace(/<[^>]*>/g, "").trim();
         if (!noteInput.title.trim() || !plainTextContent) {
           alert("Please fill both Title and Note before saving."); // or show a UI message
           return;
         }
        console.log('title',noteInput.title)
        console.log('constent',noteInput.content)
setTimeout(()=>
         saveNote({...noteInput,
            selectedEmojis,
            selectedCoverEmoji,
            isFavourite}), 0
         )
console.log(noteInput.title,'second')

         setNoteInput({title:'',content:'',id:null});
         console.log(noteInput.title,'third')
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
           {notificationMessage && <Notification message={notificationMessage}/>}
           <div className="cd13">

           </div>
          
        </div>
        </>
     );
}
 
export default InputPage;