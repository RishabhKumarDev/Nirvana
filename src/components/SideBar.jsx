import "../styles/SideBar.css";
import { Link } from "react-router-dom";
import { LuNotebookText } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../Firebase/Context/Auth";
import { auth } from "../Firebase/FireBaseConfig";
import { toast } from "react-toastify";
import { getErrorToast } from "../utlities/ErrorMessages";
import { useDatabase } from "../Firebase/Context/Database";

const SideBar = ({ sideBarVisible, setSideBarVisible }) => {
  const { signOutUser } = useAuth();
const {userData} = useDatabase();
console.log(userData,"user data side bar ")
  const handleClick = async () => {
    try {
      await signOutUser(auth);
      toast.success("Loged out sucessfully");

      console.log("user sign out");
    } catch (e) {
      console.log("couldn't sign out user", e);
      const { message, icon } = getErrorToast(e, "auth");
      toast.clearWaitingQueue();
      toast.error(`${message}`, { icon: icon });
    }
  };

  return (
    <div className="side-bar-wrap">
      <div
        className={`side-bar-shadow ${sideBarVisible ? "open" : ""}`}
        onClick={() => setSideBarVisible(false)}
      ></div>
      <div
        className={`side-bar ${sideBarVisible ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidebar-header">
          <img alt="" className="profile-pic" />
          <div className="username">{userData?.name}</div>
        </div>
        <ul className="sidebar-menu" onClick={() => setSideBarVisible(false)}>
          <li>
            <Link to="/">
              <FaHome className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/history">
              <LuNotebookText className="icon" />
              Your Entries
            </Link>
          </li>
          <li>
            <Link to="/input">
              <FaPlus className="icon" />
              New Entry
            </Link>
          </li>
          <li>
            <Link>
              <IoMdSettings className="icon" />
              Setting
            </Link>
          </li>
          <li>
            <Link>
              <MdAccountCircle className="icon" />
              Account
            </Link>
          </li>
          <li>
            <Link>
              <FaQuestion className="icon" />
              About Us
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link>
              <TbLogout2 className="icon" />
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
