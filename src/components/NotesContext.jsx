import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();

export const NotesProvider = ({children}) => {
    
    const [notes,setNotes] = useState([]);

// fetch notes

    useEffect(()=>{
        axios.get('http://localhost:5000/notes')
        .then(res => setNotes(res.data))
        .catch(err => console.log('failed to fetch',err));

    },[])

    // save notes
    //# when you pass an object where separate parameters are expected, 
    //# it treats the first argument (title) as the whole object and 
    //# leaves content as undefined.(reason for the errors displaying history and structure change is json server.)
    //# resolved this issue by passing two seperete value in saveNote() in InputPage.jsx;
    
    const saveNote = async(title , content) =>{
        console.log('1');

        const newNote = {title,content};
        console.log(newNote.id);

        try { 

            if(newNote.id){
                await axios.put(`http://localhost:5000/notes${newNote.id}`,newNote)
                console.log('puting note',newNote)
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
// delete notes
    const deleteNote =async (id) =>{
        try {
            await axios.delete(`http://localhost:5000/notes/${id}`)
             setNotes(notes.filter(note => note.id !== id));
        } catch (error) {
            console.error("couldn't delete data",error);
        }
    } 
    // edit notes
   
    return ( 
        <NotesContext.Provider value={{notes,saveNote,deleteNote}}>
            {children}
        </NotesContext.Provider>
     );

     
}
export const useNotes = () => useContext(NotesContext);