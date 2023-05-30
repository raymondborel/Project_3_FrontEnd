// import { Link } from 'react-router-dom'

// function Header () {
//     return(
//         <>
//             <nav>
//                 <Link to='/'>Home</Link>
//                 <Link to='/recommendations'>The List</Link>
//                 <Link to='/restaurants'>Restaurants</Link>
//             </nav>
//             <h1>SF Restaurant Recommendation List!</h1>
//         </>
//     )
// }

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <Link className="navbar-brand" to="index.html">
            Restaurant Recommendations
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recommendations">
                  Recommendations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants">
                  All Restaurants
                </Link>
              </li>
              <li className="nav-item dropdown"></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5 bgImg">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">
                Welcome!
                </h1>
                <p className="lead fw-bold text-white bg-gradient-dark mb-4 ">
                Here is our website where we have a list or restaurants that we love and that we allow our friends to see and add too!
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
