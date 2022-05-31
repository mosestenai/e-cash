import React, { useContext, useEffect, useState } from "react";
import {  NavLink,useLocation } from "react-router-dom";
import axios from "axios";
import "../Components/IndividualContribution/IndividualContribution.css"
import MakePaymentPage from "./MakePaymentPage/MakePaymentPage";
import {
  EmailShareButton,
  FacebookShareButton, 
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,  
  TwitterIcon,
  WhatsappIcon,
  } from "react-share";
import { AuthContext } from "../Context/AuthContext";



function IndividualContribution() {
  const{user} = useContext(AuthContext)
  const location = useLocation();  
  const path = location.pathname.split("/")[2];
  const url = `https://msaada-app.netlify.app/contribution/${path}`
  const [contribution, setContribution] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [paymentoption, setPaymentOption] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [openPaymentModal, setopenPaymentModal] = useState();
  const[deleteMode,setDeleteMode]=useState(false);
  const[loading,setLoading] =useState(false)
  const[referee1,setReferee1] = useState("");
 const[referee2,setReferee2] = useState("");
 const[referee1Phone,setReferee1Phone] = useState("")
 const[referee2Phone,setreferee2Phone] = useState("")
 const[admin,setAdmin] = useState(false)

 



  useEffect(() => {
      let id = { id: path };
    const getContribution = async () => {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/view/contribution",
        id
      );

      setContribution(res.data.response);
      setTitle(res.data.response.title);
      setDescription(res.data.response.description);
      setTargetAmount(res.data.response.targetAmount);
      setPaymentOption(res.data.response.paymentoption);
      setReferee1(res.data.response.referee1);
      setReferee2(res.data.response.referee2);
      setReferee1Phone(res.data.response.referee1Phone)
      setreferee2Phone(res.data.response.referee2Phone)


    };
    getContribution();

    if (user) {

      if (user.email === "admin@msaada.com") {
        setAdmin(true)
     }
      else {
        setAdmin(false)
      }
    }
  }, [path,user]);

  // delete a single contribution
  const handleDelete = async (e) => {
    e.preventDefault()
    setLoading(false)
    let id = { id: path };
    try {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/delete/contribution",
        id
      );
      setLoading(true)
      console.log(res.data.response)
      res.data && window.location.replace("/contributions");
    } catch (err) {
      console.log(err);
    }
  };

  // handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    let id = path;
    let updatedDetails = {
      id: id,
      title: title,
      description: description,
      targetAmount: targetAmount,
      paymentoption: paymentoption,
      createdBy:user.name,
      referee1:referee1,
      referee1Phone:referee1Phone,
      referee2:referee2,
      referee2Phone:referee2Phone,
      verified: 1,
    }
    await axios.post(
      "https://msaadaproject.herokuapp.com/api/update/contribution", updatedDetails
    );
    
  setUpdateMode(false)
    window.location.reload()
  };

  // end of delete
  return (
    <div className="IndividualContributionWrapper">
      {openPaymentModal && <MakePaymentPage contributionId={contribution.id} createdBy ={contribution.createdBy} contributionTitle={contribution.title} closePaymentModal={setopenPaymentModal} />}
          <div className="IndividualContribution">
        <h1 className="contributionHeader">{contribution.title}</h1>
        <p className="description">{contribution.description}</p>
        <p className="author">Contribution by <span>{contribution.createdBy}</span></p>
        <p className="author">Created on<span> {new Date(contribution.created_at).toDateString()} </span></p>
        <h3 className ="refereeHeader">Referees</h3>
       
        <ul className="refereeList">
          <li className="refereeListItem">{contribution.referee1} - {contribution.referee1Phone}</li>
          <li className="refereeListItem">{contribution.referee2} - {contribution.referee2Phone}</li>
          </ul>

        <button type="submit" className="paymentButton" onClick={() => setopenPaymentModal(true)}>Donate</button>

        <div className="socialIcons">
           

          <FacebookShareButton url ={url}
                    quote={"Hello friend I just donated towards this contribution, help us reach the goal by donating too !"}
          hashtag={"Helpingiscaring"}>
          <FacebookIcon className="socialIcon" round={true}></FacebookIcon>
          </FacebookShareButton>

          <WhatsappShareButton url ={url}
          separator={""}
          title ={"Hello friend I just donated towards this contribution,help us reach the goal by donating too !"}>
          <WhatsappIcon round={true} className="socialIcon"></WhatsappIcon>
          </WhatsappShareButton>

          <TelegramShareButton url ={url}
          title ={"Hello friend I just donated towards this contribution,help us reach the goal by donating too !"}> 
            <TelegramIcon round={true} className="socialIcon">
            </TelegramIcon>
           </TelegramShareButton>

           <TwitterShareButton url ={url}
            hashtags = {["Helpingiscaring"]} 
           title ={"Hello friend I just donated towards this contribution, help us reach the goal by donating too !"}
          ><TwitterIcon round={true} className="socialIcon">
           </TwitterIcon>
           </TwitterShareButton>

           <EmailShareButton url ={url}
          hashtags = {["Helpingiscaring"]}
          subject={"Donation to a msaada app contribution"}
          separator={""} 
           body ={"Hello friend I just donated towards this contribution, help us reach the goal by donating too !"}
          >
           <EmailIcon className="socialIcon" round={true}></EmailIcon>
           </EmailShareButton>




        </div>
      </div>

      <div >
        <div className="amount-raised-container">
          <div className="amount-raised"><span className="amount-text">{contribution.amount} /=</span> raised </div>
          <div className="dollars-per-mile">{contribution.targetAmount} /= needed</div>
        </div>
        </div>


        

        

        {updateMode && (
          
         <div className="editContributionBackground">
    <div className="wrapper">
        <div className="createContributionWrapper">
        <h1 className="formTitle">Edit Contribution</h1>
        <hr className="hr" />
      <form className="formInputs" > 
      
      
          

        <div className="inputs">
       
        {/* <span className="errorMessage">{errors.title}</span> */}
         
          
          <input
         
            type="text"
            placeholder="Enter a contribution title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            title="title"
            className="input"
            autoComplete="true"
          />
          {/* <span className="errorMessage">{errors.targetAmount}</span> */}
         
         
          <input
            type="text"
            placeholder="Enter a target amount..."
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            name="targetamount"
            required
            className="input"
            autoComplete="true"
          />
          {/* <span className="errorMessage">{errors.paymentoption}</span> */}
          
           <input
          type="text"
          placeholder=" paymentOption eg m-pesa"
          name="psw"
          value={paymentoption}
          onChange={(e) => setPaymentOption(e.target.value)}
          required
          className="input"
          autoComplete="true"
        />
        {/* <span className="errorMessage">{errors.paymentoption}</span> */}
          
          <input
         type="tel"
         placeholder=" Enter referee 1 name"
        
         value={referee1}
         onChange={(e) => setReferee1(e.target.value)}
         required
         className="input"
         autoComplete="true"
       />
       {/* <span className="errorMessage">{errors.referee1Phone}</span> */}
          
          <input
         type="tel"
         placeholder=" Enter referee 1 phone number"
         value={referee1Phone}
         onChange={(e) => setReferee1Phone(e.target.value)}
         required
         className="input"
         autoComplete="true"
       />
       {/* <span className="errorMessage">{errors.paymentoption}</span> */}
          
          <input
         type="text"
         placeholder=" Enter referee 2 name"
         name="psw"
         value={referee2}
         onChange={(e) => setReferee2(e.target.value)}
         required
         className="input"
         autoComplete="true"
       />
       {/* <span className="errorMessage">{errors.paymentoption}</span> */}
          
          <input
         type="tel"
         placeholder=" Enter referee 2 phone number"
         value={referee2Phone}
         onChange={(e) => setreferee2Phone(e.target.value)}
         required
         className="input"
         autoComplete="true"
       />

      
        {/* <span className="errorMessage">{errors.description}</span> */}
          <textarea
            type="text"
            id="description"
            className="textareaPlace"
           placeholder="Enter a description for your contribution... "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            required
            autoComplete="true"
          />
         
      
        

       
       
          </div>
          
        
        
      </form>
      
      
       <div className="editBtns">
              <button onClick={()=>setUpdateMode(false)}  className="cancelButton">cancel update</button>
              <button type="submit" onClick={handleUpdate} className="editBtn">Edit</button>
              </div>
     
  
    </div>
   
    </div> 
    </div>
        
        ) }

        {
          (user) && (
          (contribution.createdBy === user.name || admin) && (   
             <div className="editContribution">
               <button className="editButton"  onClick={() => setUpdateMode(true)}>Edit <i
              className=" contributionIconEdit  far fa-edit"
             
            ></i></button>
            <button  onClick={()=>setDeleteMode(true)} className="deleteButton">Delete<i
              className=" contributionIconDelete fas fa-trash-alt"
             
            ></i>
            </button>
          </div>)
          )
        }   

        {
          deleteMode && (<div className="deleteBackground">
            
            <div className="deleteContainer">
              <h1 className="deleteHeader">Delete contribution?</h1>
              <p>Are you sure you want to delete "<b>{contribution.title}"</b>?</p>
              <p>You can't undo this action</p>
              <div className="warning">
              <i className="fas fa-exclamation-triangle"></i> warning

              <p>Deleting this contribution is <b>irreversible</b> and you cannot recover it once the action is done. Are you sure you want to do this?</p>
              </div>
            <div className="editBtns">
              <button onClick={()=>setDeleteMode(false)}  className="editBtn">cancel delete</button>
              <button type="submit" onClick={handleDelete} className="cancelButton">{loading && "Deleting"}{!loading && "Delete anyway"}</button>
              </div>
              
            </div>
            
            </div>)
        }
    
      
    </div>
  );

}

export default IndividualContribution;
