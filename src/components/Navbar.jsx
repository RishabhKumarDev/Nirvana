import '../styles/Navbar.css';
import { AiOutlineQq } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { useState } from 'react';


const Navbar = () => {
    const location = useLocation();
    const [sideBarVisible,setSideBarVisible] = useState(false);


    return ( 
      <>
      
        <nav className="first-page-navbar-container">

            <div className="side-home-icon" >
              
            <BsReverseLayoutTextSidebarReverse className='side-bar-icon' 
            onClick={()=> setSideBarVisible(!sideBarVisible)} 
            />


               {location.pathname !== '/' && (
                  <Link to='/'>
                  <FaHome className='home-icon'/>
                 </Link>
               )}
            
            </div>
           
            <Link to="/" className="logo">
             <span> <AiOutlineQq className='logo-icon' /> </span>
              <span className="nirvana-part1">Nir</span>
              <span className="nirvana-part2">va</span>
              <span className="nirvana-part3">na</span>
            </Link>

        </nav>
        <SideBar  sideBarVisible={sideBarVisible} setSideBarVisible={setSideBarVisible}/>

      </>

     );
}

export default Navbar;
