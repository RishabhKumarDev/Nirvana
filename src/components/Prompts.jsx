import { useNotes } from "./NotesContext";
//css in note pad
const Prompts = () => {

    const {noteInput,setNoteInput} = useNotes();

    const PromptsList = ["What made you smile today?",
                     "One small win I had...",
                     "Something I learned today",
                     "What challenged me?",
                     "What do I feel grateful for?",
                     "Describe today in 3 words",
                     "What do I want to improve tomorrow?",
                     "A random thought I had..."]
    return ( 
        <>
             <div className="prompts-list">
                <ul>
                {PromptsList.map((prompt,i) => 
                    <li key={i} onClick={()=> setNoteInput({...noteInput,title:prompt})}>
                        {prompt}
                        </li>
                    
                )}
                </ul>
             </div>
        </>
     );
}
 
export default Prompts;