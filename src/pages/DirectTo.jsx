import { Link, useNavigate } from "react-router-dom";
import "../styles/DirectTo.css"
import matrixbackground0 from "../assets/matrixbackground0.gif"
import penguin from "../assets/penguin.png"
import { useAuth } from "../Firebase/Context/Auth";
import { useEffect } from "react";
const DirectTo = () => {
   

  const navigate = useNavigate();

  const{user} = useAuth();
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user])
    return ( 
    <div className="direct-container" style={{ background:`url(${matrixbackground0})`}}>
      
         <div className="direct-upper">
                     <h1 className="direct-name">Nirvana</h1>
         </div>
         <div className="direct-lower">
          <div className="direct-sign">
            <span></span>
            <span className="s">S</span>
            <span className="i">I</span>
            <span className="g">G</span>
            <span className="n">N</span>
            <span className="_">"__"</span>
            <span className="h">?</span>
          </div>
          <div className="character-container">
          <img className="penguin" src={penguin} alt="" />
          <Link to="/authpage?mode=login" className="pill red-pill">IN</Link>
          <Link to="/authpage?mode=signup" className="pill blue-pill" >UP</Link>

          </div>
         </div>

         
        </div>
     );
}
 
export default DirectTo;