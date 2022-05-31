import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "./admindashboard.css"

function OpenDropDown() {
    const[openDropdown, setOpenDropdown]=useState(false);
    return (
        <div>
              <div className="dropdown">
            <h4 className="adminHeader">Admin</h4>
            <i className=" dropdownIcon fas fa-caret-down" onClick={()=>{setOpenDropdown(!openDropdown)}}></i>
          </div>
          {
            openDropdown && (
              <div className="dropDownLinks">
                <ul>
                  <Link className="link" to="/admin">
                  <li>Verify Contributions</li>
                  </Link>
                  <Link className= "link" to="/alltransactions">
                  <li>Completed Donations</li>
                  </Link>
                 

                </ul>
              </div>
            )
          }
            
        </div>
    )
}

export default OpenDropDown
