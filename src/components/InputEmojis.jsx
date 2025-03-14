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
                    <div className="input-emoji-wrap">
                        <span className="input-icon-entry">{iconObj.icon}</span>
                        </div>
                    <div className="input-emoji-name">
                        <span className="input-icon-name-entry">{iconObj.name}</span>
                        </div>
                </div>
            ))}
        </div>
        </div>

        ))}

        </>
     );
}
 
export default InputEmojis;