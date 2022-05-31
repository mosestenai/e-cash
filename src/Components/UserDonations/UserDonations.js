import React,{useEffect,useState,useContext}  from 'react'
import SingleContribution from '../SingleContribution';
import axios from 'axios';
import Loading from '../Loading/Loading';
import "./UserDonations.css"

import UserDropDown from '../UserDashboard/UserDropDown';
import { AuthContext } from '../../Context/AuthContext';

function UserDonations() {
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const [contributions, setContributions] = useState([]);
    const [filteredresults,setFiltredResults] = useState([]);
       
    useEffect(() => {
      const fetchContributions = async () => {
         setLoading(true);
        const response = await axios.get(
          "https://msaadaproject.herokuapp.com/api/all/contributions"
        );
        setContributions(response.data.list);
        setFiltredResults(response.data.list)
        const unVerifiedContributions = filteredresults.filter((result) => {
           return result.createdBy === user.name;   
        }
        );        
        setContributions(unVerifiedContributions)
setLoading(false);
        
      };
     
      
      fetchContributions();

    },[user.name,filteredresults]);

    
    return (
        <div className="adminDashboard">
          <UserDropDown/>
        

          <h1 className="contributionHeader">Your donations</h1>
          <hr className="hr"/>
          {
            (contributions.length === 0) && <p> Hey {user.name}, you have not created any fundraisers yet . If you get a financial need you can create one.</p>
          }
            <SingleContribution contributions={contributions}/>       
            {loading && <Loading/>}
            
           </div>
    )
}

export default UserDonations