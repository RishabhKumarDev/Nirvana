import { useNotes } from "./NotesContext";

//css is in note pad css
const Templates = () => {
  const  {noteInput,setNoteInput} = useNotes();
    const templatesList = [
        {
          title: "Gratitude",
          content: `Today I am grateful for:\n \nWhy these things matter:`
        },
        {
          title: "Daily Reflection",
          content: `📝 Today’s highlight:\n💡 One thing I learned:\n⚠️ What I could do better:`
        },
        {
          title: "Mood Tracker",
          content: `How I felt (rate out of 10):\nWhat caused this mood:\nWhat helped me feel better:`
        },
        {
          title: "Random Thoughts",
          content: `Thought #1:\nThought #2:\nThought #3:`
        }
      ];
      
      
    return ( 
        <>
        <div className="templates-list">
            <ul>
                {templatesList.map((template,i) =>(
                <li key={i} onClick={()=> setNoteInput({...noteInput,content:` ${noteInput.content}  \n\n ${template.title} \n \n  ${template.content}`})}>
                        {template.title}
                        </li>
                ))}
            </ul>
        </div>

        </>
     );
}
 
export default Templates;