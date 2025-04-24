import { Link, useNavigate } from "react-router-dom";
import "../styles/SignIn.css";
import { FaLock, FaGoogle } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useAuth } from "../Firebase/Context/Auth";
import { useEffect, useState } from "react";
import { useDatabase } from "../Firebase/Context/Database";
import { toast } from "react-toastify";
import { IoSparkles } from "react-icons/io5";
import { getErrorToast } from "../utlities/ErrorMessages";

const SignIn = () => {
  const { singInUser, popUpsign, user } = useAuth();
  const { createUserInDB } = useDatabase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await singInUser(email, password);
      toast.success("Login Sucessful", { icon: <IoSparkles/> });
      console.log("user loged in sucessfully", user);
    } catch (error) {
      const { message, icon } = getErrorToast(error, "auth");

      toast.clearWaitingQueue();
      toast.error(`${message}`, { icon: icon });
      console.log("user doesn't exist", error.message);
    }
  };
  const handleClick = async () => {
    try {
      const result = await popUpsign();
      const user = result.user;
      console.log("user create/logedin useing pop up", user);
      if (user) {
        try {
          await createUserInDB(user);
          console.log("data sent to db of user created via pop up");
        } catch (error) {
          console.log("pop up error can't upload user ", error);
        }
      }
    } catch (error) {}
  };
  return (
    <div className="formbox login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <div className="forgot-link">
          <Link className="forgot-text"> Forgot Password ?</Link>
        </div>
        <button type="submit" className="in-up-btn">
          Login
        </button>
        <p className="or-google">or login whith Google</p>
        <div className="social-icon">
          <span className="icon-google" onClick={handleClick}>
            <FaGoogle />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
