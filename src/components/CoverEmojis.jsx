import { Link } from "react-router-dom";

const CoverEmojis = ({icon,name}) => {

    return ( 
        <Link to="/input">
            <div className="emoji-container">
                <span className={`emoji ${name}`}>{icon}</span>
                <p className={`emoji-name ${name}`}>{name}</p>
            </div>
        </Link>
     );
}
 
export default CoverEmojis;