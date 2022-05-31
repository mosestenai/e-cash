import React,{useState,useEffect, useContext} from 'react'
import axios from "axios"
import "./Transactions.css"
import Loading from '../Loading/Loading';
import { AuthContext } from '../../Context/AuthContext';
import ReactPaginate from "react-paginate"
import UserDropDown from '../UserDashboard/UserDropDown';


function UserPendingTransactions() {
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);
    const [filteredresults,setFiltredResults] = useState([])
    const [pagenumber,setPageNumber]=useState(0)
       
    useEffect(() => {
      const fetchTransactions = async () => {
        setLoading(true);
        const response = await axios.get(
          "https://msaadaproject.herokuapp.com/api/pending/transactions"
        );
        setTransactions(response.data.response);
        setFiltredResults(response.data.response)
        const userTransactions = filteredresults.filter((result) => {
           return result.PhoneNumber === user.phone          
        }
        );
        setTransactions(userTransactions)     
        setLoading(false);
      };
    
  
      fetchTransactions();
    },[filteredresults,user.phone]);

    const transactionsPerPage = 10
    const pagesVisited = pagenumber * transactionsPerPage;
    const displayTransactions = transactions.slice(pagesVisited, pagesVisited + transactionsPerPage).map(transaction=>{
        return(
        <tr key={transaction.id}>
            <td> {transaction.id}</td>
            <td> {transaction.PhoneNumber}</td>
            <td>{transaction.Amount}</td>
             <td> {transaction.contributionId}</td>
            <td className="pending">pending</td>
            <td>{new Date (transaction.created_at).toDateString()}</td>
        </tr>)
       })



       const pageCount = Math.ceil(transactions.length / transactionsPerPage)
       const pageChange = ({selected}) =>{
           setPageNumber(selected);
       }
      
  
    return (
      <div className="transactionsWrapper">
         <UserDropDown/>
          <div className="transactions">

          <table>
              <thead>
                <tr>
                    <th>Transaction Id</th>
                    <th>Phone</th>
                    <th>Amount</th>
                    <th>Contribution Id</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
              </thead>

              <tbody>
                  {loading && <Loading className="loading"/>}
                  <span>
                  {((transactions.length === 0) && !loading)&& <p className="pendingParagraph">No donations yet!</p> }
                  </span> 
                 
                                  
                
                  {
                      displayTransactions
                  }

              </tbody>
                        </table>
                        <ReactPaginate 
                             previousLabel={"Previous"}
                             nextLabel={"Next"}
                             pageCount={pageCount}
                             onPageChange={pageChange}
                             containerClassName={"pagination"}
                             previousLinkClassName ={"previousLink"}
                             nextLinkClassName={"nextLink"}
                             disabledClassName={"disabledButton"}
                             activeClassName={"activeButton"}
                             >
                                 </ReactPaginate>
                        </div>
        
               
         
      </div>
    )
}

export default UserPendingTransactions