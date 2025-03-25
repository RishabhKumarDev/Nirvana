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
    const [draft,setIsDraft] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

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
    
    const saveNote = async(note) =>{
        console.log('1');

        const newNote = {id: note.id,
                        date: new Date().toISOString(),
                        title: note.title,
                        content: note.content,
                        selectedEmojis: note.selectedEmojis,
                        selectedCoverEmoji: note.selectedCoverEmoji,
                        isFavourite: note.isFavourite,
                        draft: false
                    }; // this create an object which check 
        console.log(newNote.id,note.id);

        try { 

            if(newNote.id){
                await axios.put(`http://localhost:5000/notes/${newNote.id}`,newNote)
                setNotes(prevNotes => prevNotes.map(note => note.id === newNote.id ? newNote : note))
                setStatus('final saved')
                setTimeout(() => {
                    setStatus('')
                }, 1000);
                setNoteInput({...noteInput, title:"",content:"",id:null})
                setNotificationMessage('Sucessfully Saved');
               
                
            }
            else{
           const res = await axios.post('http://localhost:5000/notes', newNote)
              setNotes( prevNotes => [...prevNotes,res.data]); // error was because react updates state asynchronously.to optimize.
                                                               // this is functional state update which ensure state update instantly.

             
            }
        } catch (err) {
            console.log('4')
            console.error('failed to save',err);
        }
    }
    // auto save---------------------------------------------------------
    useEffect(()=>{

const isContentEmpty = (html)=>{
    const text = html.replace(/<[^>]*>/g,"").trim();
    return text.length === 0;
}
        if((noteInput.title ==="" && isContentEmpty(noteInput.content)) && noteInput.id){
            deleteNote(noteInput.id);
            setStatus('saved')
            return;
        }
        else if(noteInput.title === "" && isContentEmpty(noteInput.content)){
            return;
        }
        
        else{
        setStatus('saving...');
       
    const timmer=  setTimeout(() => {
        if(noteInput.title === ''&& !isContentEmpty(noteInput.content) && noteInput.id){
            setNoteInput({...noteInput,title: new Date().toDateString()})
        }
        autoSaveNote();
      }, 2000);

      return () => clearTimeout(timmer);

    }
    },[noteInput])

    const autoSaveNote= async()=>{
        const note = {title: noteInput.title,
                      content: noteInput.content,
                      date: new Date().toISOString(),
                       selectedEmojis: selectedEmojis,
                       selectedCoverEmoji: selectedCoverEmoji,
                       isFavourite: isFavourite,
                       draft:true,
                    }

                       
        try {
            if(!noteInput.id){
                setIsDraft(true)
                const res = await axios.post('http://localhost:5000/notes',note);
                setNotes(prevNotes => [...prevNotes,res.data])
                setNoteInput(prev => ({...prev, id:res.data.id}))
            }else{
                
            setStatus('saved')

            await axios.patch(`http://localhost:5000/notes/${noteInput.id}`,note)

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
             setNotificationMessage('Successfully deleted')

        } catch (error) {
            console.error("couldn't delete data",error);
            setNotificationMessage("Couldn't delte")
        }
    } 
    // edit notes
    const handleEdit =(note) =>{
        setNoteInput(note);
        setSelectedEmojis(note.selectedEmojis)
        setSelectedCoverEmoji(note.selectedCoverEmoji)
        setDateAndTime(note.date ? new Date(note.date) : new Date());
        setIsFavourite(note.isFavourite)
        setNotificationMessage('Editing on.')
    
    }
         // notification setting
         useEffect(()=>{
            if(notificationMessage){
                setTimeout(() => {
                    setNotificationMessage('')
                }, 3000);
            }
        },[notificationMessage]) 
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
                                       ,draft
                                       ,notificationMessage
                                       
                                        }}>
            {children}
        </NotesContext.Provider>
     );

     
}
export const useNotes = () => useContext(NotesContext);