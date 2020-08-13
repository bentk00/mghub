import React from 'react';
// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar";

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

const App = () => {
    return <>
        <Navbar/>
        <SecondNavbar/>
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <h1>Welcome to Mg hub.</h1>
                    <p>The moroccan gamers hub</p>
                </div>
                <div className="col-6">
                    <h3>App in construction...</h3>
                    <p>Soon, wait us</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h5>Thanks for waiting.</h5>
                    <p>Dev team: Younes BEN.</p>
                </div>

            </div>
        </div>
    </>
}

const rootElement = document.querySelector('#app');
ReactDom.render(<App/>, rootElement);