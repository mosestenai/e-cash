import React,{useEffect,useState}  from 'react'
import SingleContribution from '../SingleContribution';
import axios from 'axios';
import Loading from '../Loading/Loading';
import "./admindashboard.css"
import OpenDropDown from './OpenDropDown';

function AdminDashboard() {
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
           return result.verified === "0";   
        }
        );        
        setContributions(unVerifiedContributions)
setLoading(false);
        
      };
     
      
      fetchContributions();

    },[filteredresults]);

    
    return (
        <div className="adminDashboard">
          <OpenDropDown/>
        

          <h1 className="contributionHeader">Pending Verification</h1>
          <hr className="hr"/>
          {
            (contributions.length === 0) && <p>All the contributions are verified!</p>
          }
            <SingleContribution contributions={contributions}/>       
            {loading && <Loading/>}
            
           </div>
    )
}

export default AdminDashboard
