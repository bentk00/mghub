import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SecondNavbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="d-md-flex d-block flex-row mx-md-auto mx-0">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'playstation']}/></i>
                                    PS5
                                </a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'xbox']} /></i>
                                    SERIES X
                                </a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'playstation']}/></i>
                                    PS4
                                </a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'xbox']} /></i>
                                    ONE / ONE X
                                </a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'windows']} /></i>
                                    PC Master race
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'steam']} /></i>
                                    Steam
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default SecondNavbar;
