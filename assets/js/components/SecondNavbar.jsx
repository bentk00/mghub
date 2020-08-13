import React from 'react';

function SecondNavbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="d-md-flex d-block flex-row mx-md-auto mx-0">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">PS5</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">XBOX SERIES X</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">PS4</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">XBOX ONE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PC</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default SecondNavbar;
