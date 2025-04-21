import "../styles/SignIn.css"
import { FaUser,FaLock,FaGoogle } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SignUp = () => {
    return ( 
      // <div className="in-up-wraper">
      // <div className="in-up-container">
    <div className="formbox signup">
      <form action="">
          <h1>SignUp</h1>
          <div className="input-box">
              <input 
              type="text"
              placeholder="UserName"
              required
               />
               <span><FaUser /></span>
          </div>
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
        
          <button type="submit" className="in-up-btn">Sign Up</button>
          <p className="or-google">or Sign up with Google</p>
          <div className="social-icon">
              <span className="icon-google"><FaGoogle/></span>
          </div>
      </form>
    </div>

      // </div>
//   </div>
     );
}
 
export default SignUp;