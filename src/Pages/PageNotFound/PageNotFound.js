import React from 'react'
import {Link} from "react-router-dom"
import "./pagenotfound.css"
import pagenotfound  from "../../Assets/Images/page-not-found.png"

function PageNotFound() {
    return (
        <div className="pageNotFound">

            <div className="imageWrapper">
                <img alt="" src={pagenotfound} className="pageNotFoundImage"/>
            </div>
            <div className="pageNotFoundInfo">
                <div className="infoWrapper">
                <button className="pageNotFoundButton">Page not found</button>
                <h1 className="pageNotFoundTitle"> Oh No! Error 404</h1>
                <p className="pagenotFoundP">Seems like the page you are looking for does not exist.<br/>Come back to the homepage!</p>
                <Link to="/">
                <button className="homeBtn">Back to Homepage</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
