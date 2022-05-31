import React,{useState,useEffect, } from 'react'
import axios from "axios"
import "./allcompletedtransactions.css"
import Loading from '../Loading/Loading';
import OpenDropDown from '../AdminDashboard/OpenDropDown';
import ReactPaginate from  "react-paginate"

function AllCompletedTransactions() {
     const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);
    const [pagenumber,setPageNumber]=useState(0)
  
       
    useEffect(() => {
      const fetchTransactions = async () => {
        setLoading(true);
        const response = await axios.get(
          "https://msaadaproject.herokuapp.com/api/pending/transactions"
        );
        setTransactions(response.data.response);
        setLoading(false);
      };
    
  
      fetchTransactions();
    },[]);
    const transactionsPerPage = 10
    const pagesVisited = pagenumber * transactionsPerPage;
    const displayTransactions = transactions.slice(pagesVisited, pagesVisited + transactionsPerPage).map(transaction=>{
        return(
        <tr key={transaction.id}>
          <td>{transaction.id}</td>
            <td> {transaction.CheckoutRequestID}</td>
            <td> {transaction.phone}</td>
            <td>{transaction.amount}</td>
            <td> {transaction.contributionId}</td>
            <td className="completed">completed</td>
            <td>{new Date (transaction.created_at).toDateString()}</td>
        </tr>)
       })
       
       const pageCount = Math.ceil(transactions.length / transactionsPerPage)
       const pageChange = ({selected}) =>{
           setPageNumber(selected);


       }
  
    return (
      <div className="transactionsWrapper">
          <OpenDropDown/>
          
          <div className="transactions">

          <table>
              <thead>
              <tr>
    <th>Transaction Id</th>
    <th>CheckoutRequestID</th>
    <th>Phone</th>
    <th>Amount</th>
    <th>Contribution Id</th>
    <th>Status</th>
    <th>Date</th>
  </tr>

              </thead>


              <tbody>
                  {loading && <Loading className="loadingg"/>}
                  <span>
                  {(transactions.length === 0) && <p> className="No donations yet!</p> }
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

export default AllCompletedTransactions
