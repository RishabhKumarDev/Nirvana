import '../styles/EmotionsTracker.css';
import { Link, useLocation } from 'react-router-dom';
import { CoverEmojis } from './IconsContainer';


const EmotionsTracker = ({selectedCoverEmoji,setSelectedCoverEmoji}) => {

   const location = useLocation();

    return ( 
        
        <div className="cover-felling-tracker">
           <div className="question-container">
            <h3 className='question'>How are you?</h3>
           </div>
           <div className="emoji-and-name-container">

           {CoverEmojis.map((emoji,i)=> {

            const emojiElement = (
                <div 
              key={i} 
              className={`emoji-container ${selectedCoverEmoji === emoji.name ? "cover-emoji-selected": selectedCoverEmoji ? "cover-emoji-not-selected" : ""}`} 
              onClick={()=> setSelectedCoverEmoji(emoji.name)}
                >
                   <span className={`emoji ${emoji.name}`}>{emoji.icon}</span>
                   <p className={`emoji-name ${emoji.name}`}>{emoji.name}</p> 
                </div>
            )
            // wrap Link only if the location is first page "/".
            
            return location.pathname === "/" ? (<Link to={"/input"} key={i}> {emojiElement} </Link>) : (<div key={i}> {emojiElement}  </div>);
           
 } )}
       
            </div>
        </div>
     );
}
 
export default EmotionsTracker;