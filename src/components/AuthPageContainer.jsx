import { useLocation, useNavigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import "../styles/signIn.css";
import { useEffect, useState } from "react";
import { useAuth } from "../Firebase/Context/Auth";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const AuthPageContainer = () => {
    const [isSignUp,setIsSignUp] = useState(false)
    const navigate = useNavigate();


    const query = useQuery();
    const mode = query.get('mode') || 'login';


    useEffect(()=>{ // check the selected mode in direct page
     setIsSignUp(mode === "signup")  // short way of putting true i.e if mode === signup = true;
    },[mode])
    return ( 

        <div className={`auth-wrapper ${isSignUp ? 'active' : ''}`}>
        <div className="forms-container">
          
            <SignIn />
            <SignUp />
         <div className="toggle-box">
            <div className="toggle-pannel toggle-left">
                <h1>Hello, Welcome!</h1>
                <p>Don't have an Acount ?</p>
                <button className="in-up-btn toggle-btn  signup-btn"
                 onClick={()=>{
                     setIsSignUp(true)
                  navigate('/authpage?mode=signup')}}>Sign UP</button>
            </div>
            <div className="toggle-pannel toggle-right">
                <h1>Welcome Back !</h1>
                <p>Already have an Account ?</p>
                <button className="in-up-btn toggle-btn login-btn" 
                onClick={()=>{ setIsSignUp(false)
                 navigate('/authpage?mode=login')}} >
                    Log IN</button>
         </div>
         </div>
           
        </div>
      </div>
     );
}
 
export default AuthPageContainer;