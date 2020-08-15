import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SecondNavbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{
                marginTop: '70px'
            }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#secNavBar"
                        aria-controls="secNavBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="d-md-flex d-block flex-row mx-md-auto mx-0">
                    <div className="collapse navbar-collapse" id="secNavBar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mr-5">
                                <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'playstation']}/></i>
                                    PS5
                                </a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'xbox']} /></i>
                                    SERIES X
                                </a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'playstation']}/></i>
                                    PS4
                                </a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'xbox']} /></i>
                                    ONE / ONE X
                                </a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">
                                    <i className="mr-1"><FontAwesomeIcon icon={['fab', 'windows']} /></i>
                                    PC Master race
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">
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
