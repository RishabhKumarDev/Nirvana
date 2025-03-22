import { useNotes } from "./NotesContext";

//css is in note pad css
const Templates = () => {
  const  {noteInput,setNoteInput} = useNotes();
  const templatesList = [
    {
      title: "Gratitude 🌸",
      content: `🙏 Today I am grateful for:<br/><br/>✨ Why these things matter:<br/><br/>💖 How this makes me feel:`
    },
    {
      title: "Daily Reflection 🪞",
      content: `🌟 Today’s highlight:<br/><br/>💡 One thing I learned:<br/><br/>⚠️ What I could do better:<br/><br/>🌈 How I’ll improve tomorrow:`
    },
    {
      title: "Mood Tracker 🌤️",
      content: `😊 Mood rating (out of 10):<br/><br/>🎯 What caused this mood:<br/><br/>🫶 What helped me feel better:<br/><br/>💬 Affirmation for today:`
    },
    {
      title: "Random Thoughts 🌼",
      content: `🌀 Thought #1:<br/><br/>🌀 Thought #2:<br/><br/>🌀 Thought #3:<br/><br/>💭 A takeaway or insight:`
    },
    {
      title: "Goal Check-in 🎯",
      content: `✨ Today’s main goal:<br/><br/>🏆 Progress made:<br/><br/>🚧 Challenges faced:<br/><br/>💪 How I feel about it:`
    },
    {
      title: "Self-Care Reminder 💆‍♀️",
      content: `🧘‍♂️ Did I rest enough today?:<br/><br/>🍃 How I treated myself kindly:<br/><br/>🌸 What I could do for myself tomorrow:`
    },
    {
      title: "Positive Affirmations 🌈",
      content: `💖 Affirmation #1:<br/><br/>💖 Affirmation #2:<br/><br/>💖 Affirmation #3:<br/><br/>✨ How I feel reading them:`
    },
    {
      title: "Mind Dump 📝",
      content: `🧩 What’s on my mind:<br/><br/>🧩 What’s bothering me:<br/><br/>🧩 Something unexpected that happened:<br/><br/>🌻 A happy moment today:`
    },
    {
      title: "Dream Log 🌙",
      content: `🌌 Dream details:<br/><br/>🤔 Possible meaning:<br/><br/>📅 Connection to current life:<br/><br/>🎈 Feeling after waking up:`
    },
    {
      title: "Mini Achievements 🌟",
      content: `🥳 Little wins today:<br/><br/>🎯 Effort I’m proud of:<br/><br/>💡 What kept me going:<br/><br/>💐 A reward I deserve:`
    },
    {
      title: "Kindness Record 🌷",
      content: `❤️ Kind thing I did for someone:<br/><br/>🌼 How they reacted:<br/><br/>💖 Kind thing someone did for me:<br/><br/>🌸 What I learned from kindness:`
    },
    {
      title: "Moments of Calm 🕊️",
      content: `🌿 Calm moments I noticed:<br/><br/>🧘‍♀️ What helped me slow down:<br/><br/>🍵 Favorite relaxing activity today:<br/><br/>🌻 Gratitude for peace:`
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