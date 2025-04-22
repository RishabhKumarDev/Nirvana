import "../styles/SignIn.css";
import { FaUser, FaLock, FaGoogle } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useAuth } from "../Firebase/Context/Auth";
import { useEffect, useState } from "react";
import { useDatabase } from "../Firebase/Context/Database";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { SignUpUser, popUpsign, user } = useAuth();
  const { createUserInDB } = useDatabase();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(()=>{
      if(user){
         navigate("/")
      }
    },[user])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCred = await SignUpUser(email, password);
      const user = userCred.user;
      if (user) {
        await createUserInDB(user, name);
        console.log("user data sent to database");
      }
      console.log("user sucessfully created", userCred);
      console.log("user", userCred.user);
    } catch (error) {
      console.log("conuldn't create user", error);
    }
  };

  const handleClick = async () => {
    try {
      const result = await popUpsign();
      console.log("sign uped the user useing pop up", result.user);
      const user = result.user;
      if (user) {
        try {
          await createUserInDB(user);
          console.log("data sent pop up sign up");
        } catch (error) {
          console.log("user data couldn't be sent pop up sign up", error);
        }
      }
    } catch (error) {
      console.log("sign up via pop up failed", error);
    }
  };
  return (
    <div className="formbox signup">
      <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="UserName"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>
            <FaUser />
          </span>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>
            <MdEmail />
          </span>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            <FaLock />
          </span>
        </div>

        <button type="submit" className="in-up-btn">
          Sign Up
        </button>
        <p className="or-google">or Sign up with Google</p>
        <div className="social-icon">
          <span className="icon-google" onClick={handleClick}>
            <FaGoogle />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
