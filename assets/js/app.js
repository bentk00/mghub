import React, {useState} from 'react';
import '../css/app.css';
import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/users/RegisterPage";
import AuthentificationApi from "./services/AuthentificationApi";
import AuthContext from "./context/AuthContext";
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

library.add(fab, faCheckSquare, faCoffee)

AuthentificationApi.setup();

const imagesContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);

imagesContext.keys().forEach(imagesContext);

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(AuthentificationApi.isAuthenticated());

    const NavbarWithRouter = withRouter(Navbar);
    const SecondNavbarWithRouter = withRouter(SecondNavbar);

    return <>
        <AuthContext.Provider value={{
            isAuthenticated, setIsAuthenticated
        }
        }>
            <HashRouter>
                <NavbarWithRouter/>
                <SecondNavbarWithRouter/>
                <main className="container pt-5">
                    <Switch>
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/" component={HomePage}/>
                    </Switch>
                </main>

            </HashRouter>
        </AuthContext.Provider>
    </>
}


const rootElement = document.querySelector('#app');
ReactDom.render(<App/>, rootElement);