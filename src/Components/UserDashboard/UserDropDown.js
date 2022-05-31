import React,{useState,useContext} from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext';
import "./UserDropDown.css"

function UserDropDown() {
  const {user} = useContext(AuthContext)
    const[UserDropdown, setUserDropdown]=useState(false);
    return (
        <div>
              <div className="dropdown">
            <h4 className="adminHeader">{user.name}</h4>
            <i className=" dropdownIcon fas fa-caret-down" onClick={()=>{setUserDropdown(!UserDropdown)}}></i>
          </div>
          {
            UserDropdown && (
              <div className="dropDownLinks">
                <ul>
                  <Link className="link" to="/dashboard">
                  <li> Create Contributions</li>
                  </Link>
                  <Link className= "link" to="/transactions">
                  <li>My Transactions</li>
                  </Link>
                   <Link className="link" to="/user donations">
                  <li>My Fundraisers</li>
                  </Link>
                  <hr className="hr"/>
                  <h4>Account Details</h4>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  

                </ul>
              </div>
            )
          }
            
        </div>
    )
}

export default UserDropDown