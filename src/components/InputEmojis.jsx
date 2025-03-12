import "../styles/InputEmojis.css";
import { iconCategory } from "./IconsContainer";

const InputEmojis = ({selectedEmojis,setSelectedEmojis}) => {


   const toggleEmoji =(name)=>{
  
       setSelectedEmojis((prev)=>
       prev.includes(name) ? prev.filter((e) => e !== name) :[...prev,name]
    );

          
   }



    return ( 
        <>
        {iconCategory.map((categoryObj,index) =>(
            <div key={categoryObj.category}
            className={`cd${index + 2}`}
            >
        <div className="emoji-title">{categoryObj.category}</div>

        <div className="emojis-names-wrap">
            {categoryObj.emojis.map((iconObj)=>(
                <div 
                key={iconObj.name}
                className={`emoji-name-container ${selectedEmojis.includes(iconObj.name)? "selected" : ""}`}
                onClick = {() => toggleEmoji(iconObj.name)}    
                >
                    <div className="input-emoji-wrap">{iconObj.icon}</div>
                    <div className="input-emoji-name">{iconObj.name}</div>
                </div>
            ))}
        </div>
        </div>

        ))}

        </>
     );
}
 
export default InputEmojis;