import '../styles/EmotionsTracker.css';
import CoverEmojis from './CoverEmojis';
import { IoIosHappy } from "react-icons/io";
import { RiEmotionHappyFill } from "react-icons/ri";
import { AiFillMeh } from "react-icons/ai";
import { MdMoodBad } from "react-icons/md";
import { LiaSadCrySolid } from "react-icons/lia";



const EmotionsTracker = () => {

    const emojis = [
        {icon: <IoIosHappy/>,name:'rad'},
        {icon: <RiEmotionHappyFill/>,name:'good'},
        {icon: <AiFillMeh/>,name:'meh'},
        {icon: <MdMoodBad/>,name:'bad'},
        {icon: <LiaSadCrySolid/>,name:'awful'}
    ]
    return ( 
        
        <div className="cover-felling-tracker">
           <div className="question-container">
            <h3 className='question'>How are you?</h3>
           </div>
           <div className="emoji-and-name-container">

           {emojis.map((emoji,i)=>(
            <CoverEmojis key={i} icon={emoji.icon} name={emoji.name}/>
           ))}
        
            </div>
        </div>
     );
}
 
export default EmotionsTracker;