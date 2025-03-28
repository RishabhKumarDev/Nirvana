import { useNotes } from "./NotesContext";

const SaveBtn = ({onSave}) => {
const{isSaving} = useNotes();

    return ( 
        <>
        <button className={`save-btn ${isSaving? "disable-btn" : ""}`} onClick={onSave}  >SAVE</button>
        </>
     );
}
 
export default SaveBtn;