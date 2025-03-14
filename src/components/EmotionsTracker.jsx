import '../styles/EmotionsTracker.css';
import { Link, useLocation } from 'react-router-dom';
import { CoverEmojis } from './IconsContainer';
import DateTime from './DateTime';


const EmotionsTracker = ({selectedCoverEmoji,setSelectedCoverEmoji}) => {

   const location = useLocation();
   const isCoverPage = location.pathname === "/";
    return ( 
        
        <div className={`cover-felling-tracker ${isCoverPage ? "": "in-input-page"}`}>
           <div className="question-container">
            <h3 className='question'>How are you?</h3>
           </div>
           <div className="date-container"> <DateTime/> </div>
           <div className="emoji-and-name-container">

           {CoverEmojis.map((emoji,i)=> {

            const emojiElement = (
                <div 
              key={i} 
              className={`emoji-container `} 
              onClick={()=> setSelectedCoverEmoji(emoji.name)}
                >
                   <span className={`emoji ${selectedCoverEmoji === emoji.name ? emoji.name : selectedCoverEmoji ? "cover-emoji-not-selected" : emoji.name}`}>
                     {emoji.icon}</span>

                   <p className={`${selectedCoverEmoji === emoji.name ? emoji.name : selectedCoverEmoji ? "cover-emoji-not-selected-name" : emoji.name}`}>
                     {emoji.name}</p> 
                </div>
            )
            // wrap Link only if the location is first page "/".
            
            return isCoverPage ? (<Link to={"/input"} key={i}> {emojiElement} </Link>) : (<div key={i}> {emojiElement}  </div>);
           
 } )}
       
            </div>
        </div>
     );
}
 
export default EmotionsTracker;