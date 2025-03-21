import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();

export const NotesProvider = ({children}) => {
    
    const [notes,setNotes] = useState([]);
    const [noteInput,setNoteInput] = useState({title:"",content:""});
    const [selectedEmojis,setSelectedEmojis] = useState([]);
    const [selectedCoverEmoji,setSelectedCoverEmoji] = useState("");
    const [dateAndTime,setDateAndTime]= useState(new Date());
    const [status,setStatus] = useState('');
    const [isFavourite,setIsFavourite] = useState(false);

// fetch notes

    useEffect(()=>{
        axios.get('http://localhost:5000/notes')
        .then(res => setNotes(res.data))
        .catch(err => console.log('failed to fetch',err));

    },[])
//current date and time while displying entry history on input page.

const formatDate = (date) =>{
    return new Date(date).toLocaleDateString("en-US",{
       weekday:"long",
       day:"numeric",
       month:"long",
    })
}
const formatTime = (time) =>{
return new Date(time).toLocaleTimeString("en-US",{
   hour:"2-digit",
   minute:"2-digit"
})
}
    // save notes
    //# when you pass an object where separate parameters are expected, 
    //# it treats the first argument (title) as the whole object and 
    //# leaves content as undefined.(reason for the errors displaying history and structure change is json server.)
    //# resolved this issue by passing two seperete value in saveNote() in InputPage.jsx;
    
    const saveNote = async(title , content, selectedEmojis, selectedCoverEmoji , isFavourite) =>{
        console.log('1');

        const newNote = {id: noteInput.id,date: new Date().toISOString(), title,content,selectedEmojis,selectedCoverEmoji,isFavourite}; // this create an object which check 
        console.log(newNote.id,newNote.date);

        try { 

            if(newNote.id){
                await axios.put(`http://localhost:5000/notes/${newNote.id}`,newNote)
                setNotes(prevNotes => prevNotes.map(note => note.id === newNote.id ? newNote : note))
                setStatus('')
            }else{
           const res = await axios.post('http://localhost:5000/notes', newNote)
              setNotes( prevNotes => [...prevNotes,res.data]); // error was because react updates state asynchronously.to optimize.
                                                               // this is functional state update which ensure state update instantly.
              console.log('updated Notes',notes);
             console.log('saved note from api',res.data);
            }
        } catch (err) {
            console.log('4')
            console.error('failed to save',err);
        }
    }
    // auto save---------------------------------------------------------
    useEffect(()=>{
console.log('useEffect start 1')
        if((noteInput.title ==="" && noteInput.content === "") && noteInput.id){
            deleteNote(noteInput.id);
            setStatus('saved')
            console.log('delete')
        }
        else if(noteInput.title === "" && noteInput.content === ""){
            console.log('return')
            return;
        }
        
        else{
        setStatus('saving...');

    const timmer=  setTimeout(() => {
        if(noteInput.title === "" && noteInput.content !== ""){
            setNoteInput({...noteInput,title:new Date().toDateString()})
        }
        autoSaveNote();
      }, 2000);

      return () => clearTimeout(timmer);

    }
console.log('timmer')
    },[noteInput])

    const autoSaveNote= async()=>{
        const note = {title: noteInput.title,
                      content: noteInput.content,
                      date: new Date().toISOString(),
                       selectedEmojis: selectedEmojis,
                       selectedCoverEmoji: selectedCoverEmoji,
                       isFavourite: isFavourite
                    }

                       
        try {
            if(!noteInput.id){
                const res = await axios.post('http://localhost:5000/notes',note);
                setNotes(prevNotes => [...prevNotes,res.data])
                setNoteInput(prev => ({...prev, id:res.data.id}))
                console.log('post',note)
            }else{
                
            setStatus('saved')

            await axios.patch(`http://localhost:5000/notes/${noteInput.id}`,note)
            console.log('patch',note)

          setStatus(' Entry Saved✅')
        }
        } catch (error) {
            console.error('fucked up',error);
            setStatus('❌Error')
        }

    }
// delete notes
    const deleteNote =async (id) =>{
        try {
            console.log('deleted started')

            await axios.delete(`http://localhost:5000/notes/${id}`)
             setNotes(notes.filter(note => note.id !== id));
             setNoteInput({title:"",content:""});
             console.log('deleted sucessfully')
        } catch (error) {
            console.error("couldn't delete data",error);
        }
    } 
    // edit notes
    const handleEdit =(note) =>{
        setNoteInput(note);
        setSelectedEmojis(note.selectedEmojis)
        setSelectedCoverEmoji(note.selectedCoverEmoji)
        setDateAndTime(note.date ? new Date(note.date) : new Date());
        setIsFavourite(note.isFavourite)
    }
    return ( 
        <NotesContext.Provider value={{notes,
                                       saveNote
                                       ,deleteNote
                                       ,handleEdit
                                       ,noteInput
                                       ,setNoteInput
                                       ,selectedEmojis
                                       ,setSelectedEmojis
                                       ,selectedCoverEmoji
                                       ,setSelectedCoverEmoji
                                       ,formatDate
                                       ,formatTime
                                       ,dateAndTime
                                       ,setDateAndTime
                                       ,status
                                       ,isFavourite
                                       ,setIsFavourite
                                       
                                        }}>
            {children}
        </NotesContext.Provider>
     );

     
}
export const useNotes = () => useContext(NotesContext);