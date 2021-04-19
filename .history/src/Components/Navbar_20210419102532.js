import React from "react";
// React Fontawesome imports
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#Vasavi"> Vasavi</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon= {faBars} style={{color:"fff"}}/>       
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#Vasavi">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#AboutMe">AboutMe</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#Experience">Experience</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#Projects">Projects</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#ContactMe">ContactMe</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#Reference">Referees</a>
                                </li>
                                </ul>
                                </div>
                                </div>
                                </nav>
    )
}

export default Navbar;
