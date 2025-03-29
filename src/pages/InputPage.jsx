import EmotionsTracker from "../components/EmotionsTracker";
import NotePad from "../components/NotePad";
import { useNotes } from "../components/NotesContext";
import SaveBtn from "../components/SaveBtn";
import "../styles/InputPage.css";
import InputEmojis from "../components/InputEmojis";
import { useNotification } from "../components/Notification/NotificationContext";
import ImageUpload from "../components/ImageUploader/ImageUploader";


const InputPage = () => {
       
   const {setNotification} = useNotification();
   const {saveNote,
          noteInput,setNoteInput,
          selectedEmojis,setSelectedEmojis,
          selectedCoverEmoji,setSelectedCoverEmoji,
          status,
          isFavourite,
          setIsFavourite,
          setDateAndTime,
         } = useNotes();

      
         
   const saveInput = () =>{
      try {
         const plainTextContent = noteInput.content.replace(/<[^>]*>/g, "").trim();

            if(!noteInput.title.trim()){
               setNotification({message:'title empty',type:"empty"})

               return;
            }else if( !plainTextContent ){
               setNotification({message:'Notes empty',type:"empty"})
               console.log('note content')
               return;
            }else if(!selectedCoverEmoji){
               setNotification({message:'Emoji empty',type:"empty"})


               return;
            }
         saveNote({...noteInput,
            selectedEmojis,
            selectedCoverEmoji,
            isFavourite})

         setNoteInput({title:'',content:'',id:null});
         setSelectedEmojis([]);
         setSelectedCoverEmoji("");
         setIsFavourite(false)
         setDateAndTime(null)
         setNotification({message:'Succesfuly saved',type:"sucess"})
         
      } catch (error) {
         setNotification({message:'Error saving data',type:"error"})
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
           <div className="image-voice-container">
           <div className="image-upload-section">
            <ImageUpload/>
           </div>
           <div className="voice-upload-section"></div>
        </div>
            <NotePad noteInput={noteInput} setNoteInput={setNoteInput} status={status}   />
           <SaveBtn  onSave={saveInput} />
           
           </div>
          
        </div>
       
        </>
     );
}
 
export default InputPage;