import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

function Navbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Mg hub.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" style={{fontSize: '16px'}} href="#">STORE !</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">Tests</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  data-toggle="collapse" data-target=".navbar-collapse.show" href="#">
                                Events</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle " data-toggle="dropdown" href="#" role="button"
                               aria-haspopup="true" aria-expanded="false">More</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"/>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" to="/register">Register</Link>
                        </li>
                        <li className="nav-item mr-1">
                            <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
