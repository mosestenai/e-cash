import React from 'react'
import { Link } from 'react-router-dom';
import image5 from "../../Assets/Images/pic.png.png";

function Footer() {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col">
            <p>
              Msaada foundation is aimed at allowing people to raise money for
              events ranging from diverse catastrophes and providing a caring
              experience.
              <div>
                <img className="pic1" src={image5} alt="" />
              </div>
            </p>
          </div>
          <div className="col">
            <h3>Office</h3>
            <p>Nairobi, Kenya</p>
            <p>Nairobi City</p>
            <p className="email-id">msaadafoundation@gmail.com</p>
            <h4>+254-705741420</h4>
          </div>
          <div className="col">
            <h3>Links</h3>
            <ul>
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              <li>
                <Link className="link" to="/register">Register</Link>
              </li>

              <li>
                <Link className="link" to="/contributions">Contributions</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Newsletter</h3>
            <form className="home-form">
              <i className="fa fa-envelope"></i>
              <input type="email" placeholder="Enter your email id" required />
              <button type="submit">
                <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </form>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Msaada Foundation &copy; 2022 - All Rights Reserved
        </p>
      </footer>

    </div>
  )
}

export default Footer

