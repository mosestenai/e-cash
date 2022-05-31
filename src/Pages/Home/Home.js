import "./home.css";
import { Link } from "react-router-dom";
import landingPage from "../../Assets/Images/landingPage.png"
import Image1 from "../../Assets/Images/prince-akachi-i2hoD-C2RUA-unsplash.jpg"
import Image2 from "../../Assets/Images/good-faces-QDRCvXpP18U-unsplash.jpg"
import Image3 from "../../Assets/Images/elizeu-dias-2EGNqazbAMk-unsplash.jpg"



export default function Home() {
  return (
    <>
      <div className="landing">
        <div className="lead">
          <h1>
            Together,<br/> we can grow.
          </h1>
          <p className="leadParagraph">
            Msaada app is your online fundraising solution where you can create fundraisers and share with your friends and family for contribution.
            
            </p>

        <p className="landingParagraph">
          You are raising funds for the people <br /> and causes that matter to
          you.
        </p>
        <button className="landingBtn">
          <Link to="/register" className="link">
          Get Started
          </Link>

        </button>

        </div>
        <div className="imageDiv">
          <img src={landingPage} className="landingImage" alt=""/>
          </div>
       
      </div>
       <div className="heading">
      <h1 className="testimonialHeading">How does it work?</h1>
      <hr  className="hr"/>
      </div>



<div className="howItWorks">
  <div className="howItWorksItem">
    <div className="icon">
  <i className=" homeIcon fas fa-user-plus"></i>
  </div>
  <h2 className="howItWorksHeading">Create an account</h2>
  <p>Simply create an account using your name , phone number ,email and password and log in!</p>
  </div>
  <div className="howItWorksItem">
    <div className="icon">
  <i className=" homeIcon fas fa-hand-point-right"></i>
  </div>
  <h2 className="howItWorksHeading">Create a contribution</h2>
  <p>Choose a suitable title and description, and of course don't forget the target amount you wish to raise!</p>
  </div>
  <div className="howItWorksItem">
    <div>
   <i className=" homeIcon fas fa-share-alt-square"></i>
   </div>
  <h2 className="howItWorksHeading">Spread the word</h2>
  <p>Voila, you made it! Now just share your contribution to family and friends using your favorite social platforms!</p>
  </div>

</div>






      <div className="heading">
      <h1 className="testimonialHeading">What do users say?</h1>
      <hr  className="hr"/>
      </div>



     < div className="testimonials">
             
            <div className="testimonialItem">
           <p className="testimonialParagraph"><i className=" quote fas fa-quote-left"></i> if you are looking for a platform to help you raise your funds safely and at no fee then obviously Msaada app is the place. This is a platform with the art of giving at the heart of the developers.<i className=" quote fas fa-quote-right"></i></p>
             <img alt="" src={Image1} className="testimonialImage"/>
             <p className="testimonialName">Rodah Reni</p>
             <p className="testimonialDesignation">Doctor</p>
           </div>
         
         
           <div className="testimonialItem">
           <p className="testimonialParagraph"> <i className="quote fas fa-quote-left"></i> I created a fundraiser on Msaada app in very few step compared to other fundraising platforms. The experience was quite awesome .<i className="quote fas fa-quote-right"></i></p>
             <img alt="" src={Image2} className="testimonialImage"/>
             <p className="testimonialName">Nadi Mulski</p>
             <p className="testimonialDesignation">Software engineer</p>
           </div>
         
         
           <div className="testimonialItem">
             <p className="testimonialParagraph"><i className=" quote fas fa-quote-left"></i> Using Msaada app was simple and fast, there are no hidden costs whatsoever .This is has taken online fundraising to a whole new level.<i className=" quote fas fa-quote-right"></i></p>
             <img alt="" src={Image3} className="testimonialImage"/>
             
             <p className="testimonialName">Peter Jones</p>
             <p className="testimonialDesignation">Accountant</p>
           </div>
         
         

       
     </div>

      <div className="section4">
        <div className="sectionDiv">
          <img
            alt=""
            className="secImage"
            src="https://www.bbva.com/wp-content/uploads/2017/08/movil-smartphones-clientes-apps-usuarios-tecnologia-recurso-BBVA-e1514912389593-1024x685.jpg"
          />
        </div>

        <div className="googlePlay">
        <h1 className="googlePlayHeader">Download It Now</h1>
        <hr className="hr"/>

         <h2 className="MsaadaHeader">The Msaada App</h2>
<p className="googlePlayParagraph">
  Start and manage fundraisers, interact with <br />
  supporters, and learn about important causes
  <br /> while on the go and at the cormfort of your phone.
</p>
<button className="googleButton">
<i className="fab fa-google-play"></i>
  Download on Google Play store 
</button>
        </div>

       
      </div>

     
    </>
  );
}
