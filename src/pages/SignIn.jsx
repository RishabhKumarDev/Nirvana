import { Link } from "react-router-dom";
import "../styles/SignIn.css";
import { FaLock,FaGoogle } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SignIn = () => {
    return ( 
        // <div className="in-up-wraper">
            // <div className="in-up-container">
          <div className="formbox login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input 
                    type="text"
                    placeholder="Email"
                    required
                     />
                     <span><MdEmail /></span>
                </div>
                <div className="input-box">
                    <input 
                    type="password"
                    placeholder="Password"
                    required
                     />
                     <span><FaLock/></span>
                </div>
                <div className="forgot-link">
                    <Link className="forgot-text"> Forgot Password ?</Link>
                </div>
                <button type="submit" className="in-up-btn">Login</button>
                <p className="or-google">or login whith Google</p>
                <div className="social-icon">
                    <span className="icon-google"><FaGoogle/></span>
                </div>
            </form>
          </div>

            // </div>
        // </div>
     );
}
 
export default SignIn;