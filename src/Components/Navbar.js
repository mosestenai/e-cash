import React,{useContext, useState} from "react";
import { AuthContext } from "../Context/AuthContext";
import "../App.css";
import {  NavLink } from "react-router-dom";
function Navbar() {
  const { user, dispatch } = useContext(AuthContext)
  const handleLogout =()=>{
    dispatch({type:"LOGOUT"})
  } 
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  return (
    <>
    
    <nav className="navbar">
        <div className="navContainer">
          <NavLink exact to="/" className="nav-logo">
            Msaada 
                  
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contributions"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contributions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Create Contribution
              </NavLink>
            </li>
            {!user &&
            <li className="nav-item">
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign up 
              </NavLink>
            </li>
            }


            {
              !user && (<li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                 >
               
               Sign In
              </NavLink>
            </li>)
            }

            { 
              user && (<li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleLogout}
                 >
               
              Log out
              </NavLink>
            </li>)
            }
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>



    // <div className="navbar">
    //   <div className="navbarLeft">

    //     <img src={image1} alt="" className="logo"/>
    //   <h1 className="logoText">Msaada App</h1>
      
    //   </div>
    //   <div className="navbarCenter">
    //     <ul className="navbarList">
    //       <Link className="link" to="/">
    //         <li className="navbarListItem">Home</li>
    //       </Link>
    //       <Link className="link" to="/contributions">
    //         <li className="navbarListItem">Contributions</li>
    //       </Link>
    //       <Link className="link" to="/createContribution">
    //         <li className="navbarListItem">Create Contribution</li>
    //       </Link>
    //       <Link className="link" to="/createContribution">
    //         <li className="navbarListItem">About Us</li>
    //       </Link>
    //     </ul>
    //   </div>
    //   <div className="navbarRight">
    //     <div className="navbarEnd">
    //       <Link to="/login">
    //         <button className="navbarEndItem" onClick={handleLogout}>
    //           {!user && "Log In"}
    //         {user && "LOGOUT"}
    //         </button>
    //       </Link>
    //       <Link to="/register">
    //         <button className="navbarEndItem">
    //           {!user && "Sign Up"}
    //         {user && user.name}
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
