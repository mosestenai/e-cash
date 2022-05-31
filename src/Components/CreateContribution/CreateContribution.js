import React, { useState, useContext } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./CreateContribution.css";
import { AuthContext } from "../../Context/AuthContext";



function CreateContribution() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [paymentoption, setPaymentOption] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [referee1, setReferee1] = useState("");
  const [referee2, setReferee2] = useState("");
  const [referee1Phone, setReferee1Phone] = useState("")
  const [referee2Phone, setreferee2Phone] = useState("")








  async function handleCreateContribution(e) {
    e.preventDefault();
    setErrors([])
    setLoading(true)
    let contributionDetails = {
      title,
      description,
      targetAmount,
      paymentoption,
      createdBy: user.name,
      referee1,
      referee1Phone,
      referee2,
      referee2Phone
    };

    axios
      .post(
        "https://msaadaproject.herokuapp.com/api/create/contribution",
        contributionDetails
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data.error) {
          setErrors(response.data.error)
        }

        setLoading(false)

        if (response.data.success === true) {
          swal({
            title: "Success",
            text: "Succefully created a contribution! We will verify it very soon! ",
            icon: "success",
          });
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>



      <div className="createContribution">
        <div className="createContributionWrapper">
          <h1 className="formTitle">Create A Contribution</h1>
          <hr className="hr" />
          <form className="formInputs" >




            <div className="inputs">

              <span className="errorMessage">{errors.title}</span>


              <input

                type="text"
                placeholder="Enter a contribution title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                title="title"
                className="input"
                autoComplete="true"
              />
              <span className="errorMessage">{errors.targetAmount}</span>


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
              <span className="errorMessage">{errors.paymentoption}</span>

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
              <span className="errorMessage">{errors.referee1}</span>

              <input
                type="tel"
                placeholder=" Enter referee 1 name"

                value={referee1}
                onChange={(e) => setReferee1(e.target.value)}
                required
                className="input"
                autoComplete="true"
              />
              <span className="errorMessage">{errors.referee1Phone}</span>

              <input
                type="tel"
                placeholder=" Enter referee 1 phone number"
                value={referee1Phone}
                onChange={(e) => setReferee1Phone(e.target.value)}
                required
                className="input"
                autoComplete="true"
              />
              <span className="errorMessage">{errors.referee2}</span>

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
              <span className="errorMessage">{errors.referee2Phone}</span>

              <input
                type="tel"
                placeholder=" Enter referee 2 phone number"
                value={referee2Phone}
                onChange={(e) => setreferee2Phone(e.target.value)}
                required
                className="input"
                autoComplete="true"
              />

              <span className="errorMessage">{errors.description}</span>
              <textarea
                type="text"
                id="description"
                className="textarea"
                placeholder="Enter a description for your contribution... "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                required
                autoComplete="true"
              />






            </div>



          </form>
          <button className="formButton" type="submit" onClick={handleCreateContribution}>
            {loading && "Creating Contribution ..."}
            {!loading && "create contribution"}

          </button>


        </div>

      </div>

    </>
  );
}

export default CreateContribution;

