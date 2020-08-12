import React from 'react';
// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import ReactDom from "react-dom";

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

const App = () => {
    return <h1>Bonjour a tous</h1>;
}

const rootElement = document.querySelector('#app');
ReactDom.render(<App/>, rootElement);